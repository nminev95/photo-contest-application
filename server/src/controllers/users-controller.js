import express from 'express';
import createToken from '../auth/create-token.js';
import * as ERRORS from '../constants/service-errors.js';
import usersData from '../data/users-data.js';
import usersService from '../services/users-service.js';
import { createUserSchema } from '../validations/schemas/create-user-schema.js';
import { createValidator } from '../validations/validator-middleware.js';

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
        });


export default usersController;