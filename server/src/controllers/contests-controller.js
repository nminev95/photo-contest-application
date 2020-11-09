import express from 'express';
import { authMiddleware } from '../auth/auth-middleware.js';
import * as ERRORS from '../constants/service-errors.js';
import contestsData from '../data/contests-data.js';
import contestsService from '../services/contests-service.js';
import multer from 'multer';
import storage from './../storage.js';


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
        authMiddleware,
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
    )
    .post('/:id',
    authMiddleware,
    multer({ storage: storage }).single('image'),
    async (req, res) => {
        const { id } = req.params;
        const user_id = req.user.id;
        const title = req.body.title;
        const description = req.body.description;
        const fileName = req.file.filename;
        const date = new Date();
       
        const { error } = await contestsService.createNewPhotoRecord(contestsData)(title, description, fileName, user_id, id,date);

        if (error) {
            res.status(500).send({ message: 'Internal Server Error' });
        } else {
            res.status(200).send({path: fileName}); 
        }
    });


export default contestsController;