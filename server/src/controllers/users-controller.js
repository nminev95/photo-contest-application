import express from 'express';
import * as errors from '../constants/service-errors.js';
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

            if (error === errors.DUPLICATE_RECORD) {
                res.status(409).send({ message: 'Username is not available' });
            } else if (error === errors.NO_MATCH) {
                res.status(403).send({ message: 'Passwords don\'t match' });
            } else {
                res.status(201).send(user);
            }
        },
    );

export default usersController;