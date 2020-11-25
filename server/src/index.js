import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT } from './constants/config.js';
import passport from 'passport';
import jwtStrategy from './auth/strategy.js';
import usersController from './controllers/users-controller.js';
import { createRequire } from 'module';
import contestsController from './controllers/contests-controller.js';
import authController from './controllers/auth-controller.js';
import contestsData from './data/contests-data.js';
import contestsService from './services/contests-service.js';
import usersService from './services/users-service.js';
import usersData from './data/users-data.js';

const require = createRequire(import.meta.url);
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const redis = require('redis');

export const client = redis.createClient(6379);
io.on('connection', () => console.log('socket!!'));

passport.use(jwtStrategy);
app.use(cors());
app.use(bodyParser.json());
app.use('/users', usersController);
app.use('/contests', contestsController);
app.use('/auth', authController);
app.use('/public', express.static('images'));

app.all('*', (req, res) =>
    res.status(404).send({ message: 'Resource not found!' }),
);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    setInterval(async () => {
        const contests = await contestsService.getFinishedAndUnawaredContests(contestsData)();

        if (!contests) {
            return;
        }

        contests.map(async (contest) => {
            const scores = await contestsService.getUserScores(contestsData)(contest.id);
            const firstThree = [];

            const userScoresMap = scores.reduce((acc, score) => {
                if (!acc.get(score.rating)) {
                    acc.set(score.rating, [score.user_id]);
                } else {
                    acc.get(score.rating).push(score.user_id);
                }

                return acc;
            }, new Map());

            userScoresMap.forEach((value, key) => {
                if (firstThree.length === 3) {
                    return;
                }
                firstThree.push({
                    rating: key,
                    users: value,
                });
            });

            let firstPlacePoints;
            const secondPlacePoints = firstThree[1].users.length === 1 ? 35 : 25;
            const thirdPlacePoints = firstThree[2].users.length === 1 ? 20 : 10;

            if (firstThree[0].rating >= (secondPlacePoints * 2)) {
                firstPlacePoints = 75;
            } else {
                firstPlacePoints = firstThree[0].users.length === 1 ? 50 : 40;
            }
         
            usersData.addUserPoints(firstPlacePoints, firstThree[0].users);
            usersData.addUserPoints(secondPlacePoints, firstThree[1].users);
            usersData.addUserPoints(thirdPlacePoints, firstThree[2].users);
            contestsData.markContestAwarded(contest.id);
        });

    }, 60000);
});