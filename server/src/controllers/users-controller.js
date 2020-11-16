import express from 'express';
import createToken from '../auth/create-token.js';
import * as ERRORS from '../constants/service-errors.js';
import usersData from '../data/users-data.js';
import usersService from '../services/users-service.js';
import { createUserSchema } from '../validations/schemas/create-user-schema.js';
import { createValidator } from '../validations/validator-middleware.js';
import { authMiddleware } from '../auth/auth-middleware.js';

const usersController = express.Router();

usersController
    .post('/register',
        createValidator(createUserSchema),
        async (req, res) => {

            const userData = req.body;
            const { error, user } = await usersService.createUser(usersData)(userData);

            if (error === ERRORS.DUPLICATE_RECORD) {
                res.status(409).send({ message: 'Username is not available' });
            } else if (error === ERRORS.NO_MATCH) {
                res.status(403).send({ message: 'Passwords don\'t match' });
            } else {
                res.status(201).send(user);
            }
        },
    )
    .post('/login',
        async (req, res) => {

            const { username, password } = req.body;
            const { error, user } = await usersService.signInUser(usersData)(username, password);

            if (error === ERRORS.INVALID_SIGNIN) {
                res.status(401).send({
                    message: 'Invalid username/password',
                });
            } else {
                const payload = {
                    sub: user.id,
                    username: user.username,
                    role: user.role,
                };
                const token = createToken(payload);

                res.status(200).send({
                    token: token,
                });
            }
        },
    )
    .get('/:id/profile',
        authMiddleware,
        async (req, res) => {

            const { id } = req.user;
            const { user, error } = await usersService.getUserById(usersData)(+id);

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'User not found!' });
            } else {
                res.status(200).send(user);
            }
        },
    )
    .get('/experts',
        authMiddleware,
        async (req, res) => {

            const { users, error } = await usersService.getHighLevelUsers(usersData)();

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'No high level users found!' });
            } else {
                res.status(200).send(users);
            }
        },
    )
    .get('/:id/contests',
        authMiddleware,
        async (req, res) => {

            const { id } = req.user;
            const { contests, error } = await usersService.getUserCurrentContests(usersData)(+id);

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'You are not participating in any contests! Hurry up and join in!' });
            } else {
                res.status(200).send(contests);
            }
        },
    )
    .get('/past-contests',
        authMiddleware,
        async (req, res) => {

            const { id } = req.user;
            const { pastContests, error } = await usersService.getUserPastContests(usersData)(+id);
            
            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'You have no past contests!' });
            } else {
                res.status(200).send(pastContests);
            }
        },
    );

export default usersController;