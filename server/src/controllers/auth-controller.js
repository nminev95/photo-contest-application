import express from 'express';
import jwt from 'jsonwebtoken';
import { createAccessToken, createRefreshToken } from '../auth/create-token.js';
import { REFRESH_TOKEN_SECRET_KEY } from '../constants/config.js';
import usersData from '../data/users-data.js';
import usersService from '../services/users-service.js';
import { createUserSchema } from '../validations/schemas/create-user-schema.js';
import { createValidator } from '../validations/validator-middleware.js';
import * as ERRORS from '../constants/service-errors.js';

const authController = express.Router();

authController
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
                const accessToken = createAccessToken(payload);
                const refreshToken = createRefreshToken(payload);

                res.status(200).send({
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                });
            }
        },
    )
    .post('/token',
        async (req, res) => {
            const refreshToken = req.body.refreshToken;

            if (!refreshToken) {
                res.status(401).json({ message: 'No token found!' });
            }
            jwt.verify(refreshToken, REFRESH_TOKEN_SECRET_KEY, (err, user) => {

                if (err) {
                    res.status(403).json({ message: 'Invalid token!' });
                }
                const accessToken = createAccessToken({ sub: user.sub, username: user.username, role: user.role });
                res.status(200).json(accessToken);
            });
        },
    );

export default authController;