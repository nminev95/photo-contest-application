import express from 'express';
import { authMiddleware } from '../auth/auth-middleware.js';
import * as ERRORS from '../constants/service-errors.js';
import contestsData from '../data/contests-data.js';
import contestsService from '../services/contests-service.js';

const contestsController = express.Router();

contestsController
    .get('/',
        authMiddleware,
        async (req, res) => {

            const { contests, error } = await contestsService.getAllContests(contestsData)();

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'Contests not found!' });
            } else {
                res.status(200).send(contests);
            }
        },
    )
    .get('/:id',
        // authMiddleware,
        async (req, res) => {
            const { id } = req.params;
            const { contest, error } = await contestsService.getContestById(contestsData)(+id);

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'Contest not found!' });
            } else {
                res.status(200).send(contest);
            }
        },
    )
    .put('/:id',
        async (req, res) => {
            const { id } = req.params;
            const { contest, error } = await contestsService.setNextContestPhase(contestsData)(+id);

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'Contest not found!' });
            } else {
                res.status(200).send(contest);
            }
        },
    );

export default contestsController;