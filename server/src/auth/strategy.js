import passportJwt from 'passport-jwt';
import { PRIVATE_KEY } from '../constants/config.js';

const options = {
    secretOrKey: PRIVATE_KEY,
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtStrategy = new passportJwt.Strategy(options, async (payload, done) => {
    const userData = {
        id: payload.sub,
        username: payload.username,
        firstName: payload.firstName,
        lastName: payload.lastName,
        role: payload.role,
        email: payload.email,
        registered: payload.registerDate,
        points: payload.points,
        rank: payload.rank,
    };

    done(null, userData);
});

export default jwtStrategy;
