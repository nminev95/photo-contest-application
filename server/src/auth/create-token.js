import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET_KEY, ACCESS_TOKEN_LIFETIME, REFRESH_TOKEN_LIFETIME, REFRESH_TOKEN_SECRET_KEY } from '../constants/config.js';

export const createAccessToken = (payload) => {
    
    const token = jwt.sign(
        payload,
        ACCESS_TOKEN_SECRET_KEY,
        { expiresIn: ACCESS_TOKEN_LIFETIME },
    );

    return token;
};

export const createRefreshToken = (payload) => {
    
    const token = jwt.sign(
        payload,
        REFRESH_TOKEN_SECRET_KEY,
        { expiresIn: REFRESH_TOKEN_LIFETIME },
    );

    return token;
};


