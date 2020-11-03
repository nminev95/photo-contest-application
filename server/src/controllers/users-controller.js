import express from 'express';
import serviceErrors from '../constants/service-errors';
import usersData from '../data/users-data';
import usersService from '../services/users-service';
import { createUserSchema } from '../validations/schemas/create-user-schema';
import { createValidator } from '../validations/validator-middleware';

const usersController = express.Router();

usersController
    .post('/register',
        createValidator(createUserSchema),
        async (req, res) => {
            const userData = req.body;

            const { error, user } = await usersService.createUser(usersData)(userData);
            
            if (error === serviceErrors.DUPLICATE_RECORD) {
                res.status(409).send({ message: 'Username is not available' });
            } else if (error === serviceErrors.NO_MATCH) {
                res.status(403).send({ message: 'Passwords don\'t match' });
            } else {
                res.status(201).send(user);
            }
        },
    );