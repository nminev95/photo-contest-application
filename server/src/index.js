import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT } from './constants/config.js';
import passport from 'passport';
import jwtStrategy from './auth/strategy.js';
import usersController from './controllers/users-controller.js';

const app = express();
passport.use(jwtStrategy);

app.use(cors());
app.use(bodyParser.json());
app.use('/users', usersController);

app.all('*', (req, res) =>
    res.status(404).send({ message: 'Resource not found!' }),
);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));