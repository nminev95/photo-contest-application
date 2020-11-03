import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT } from './config.js';
import passport from 'passport';
import jwtStrategy from './auth/strategy.js';

const app = express();
passport.use(jwtStrategy);

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));