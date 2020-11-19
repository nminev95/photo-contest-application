import passportJwt from 'passport-jwt';
import { ACCESS_TOKEN_SECRET_KEY } from '../constants/config.js';

const options = {
    secretOrKey: ACCESS_TOKEN_SECRET_KEY,
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtStrategy = new passportJwt.Strategy(options, async (payload, done) => {
    
    const userData = {
        id: payload.sub,
        username: payload.username,
        role: payload.role,
    };

    done(null, userData);
});

export default jwtStrategy;
