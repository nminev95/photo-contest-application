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
import usersService from './services/users-service.js';
import usersData from './data/users-data.js';

const require = createRequire(import.meta.url);
const app = express();
const redis = require('redis');
const server = require('http').createServer(app);
export const client = redis.createClient(6379);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    },
});

const socketsMap = new Map();

io.on('connection', (socket) => {
    socket.on('login', (user) => {
        const parsedUser = JSON.parse(user);
        if (user) {
            socket.userId = parsedUser.sub;
        }

        if (!socketsMap.get(parsedUser.sub)) {
            socketsMap.set(parsedUser.sub, socket.id);
        }
        console.log(socketsMap);
        usersService.getAllUserNotifications(usersData)(socket);
    });
    socket.on('new_jury_invitations', (invitationsArray) => {
        const juryInvitations = JSON.parse(invitationsArray);
        juryInvitations.map(async (invitation) => {

            if (socketsMap.get(invitation.id)) {
                const notifications = await usersData.getNotificationsById(invitation.id);

                if (notifications.juryInvitations.length !== 0 || notifications.privateContestInvitations.length !== 0) {
                    const unreadContestNotifications = notifications.privateContestInvitations.filter((notification) => !!notification.isRead === false);
                    const unreadJuryNotifications = notifications.juryInvitations.filter((notification) => !!notification.isRead === false);
                    io.emit('new_jury_notifications', {
                        privateContestInvitations: unreadContestNotifications,
                        juryInvitations: unreadJuryNotifications,
                    });
                }
            }
        });
    });
});

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
    // setInterval(() => contestsService.awardPointsForFinishedContests(usersData)(), 60000);
});
