import express from 'express';
import * as ERRORS from '../constants/service-errors.js';
import usersData from '../data/users-data.js';
import usersService from '../services/users-service.js';
import { authMiddleware } from '../auth/auth-middleware.js';

const usersController = express.Router();

usersController
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
    .get('/contests',
        authMiddleware,
        async (req, res) => {

            const id = req.user.id;
            const { contests, error } = await usersService.getUserCurrentContests(usersData)(+id);
console.log(contests);
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