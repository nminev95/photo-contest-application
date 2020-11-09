import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT } from './constants/config.js';
import passport from 'passport';
import jwtStrategy from './auth/strategy.js';
import usersController from './controllers/users-controller.js';
import { createRequire } from 'module';
import contestsController from './controllers/contests-controller.js';

const require = createRequire(import.meta.url);
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', () => console.log('socket!!'));

passport.use(jwtStrategy);
app.use(cors());
app.use(bodyParser.json());
app.use('/users', usersController);
app.use('/contests', contestsController);

app.use('/public', express.static('images'));

app.all('*', (req, res) =>
    res.status(404).send({ message: 'Resource not found!' }),
);

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));