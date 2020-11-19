import express from 'express';
import jwt from 'jsonwebtoken';
import { createAccessToken } from '../auth/create-token.js';
import { REFRESH_TOKEN_SECRET_KEY } from '../constants/config.js';

const authController = express.Router();

authController
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