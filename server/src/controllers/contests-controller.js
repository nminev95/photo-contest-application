import express from 'express';
import { authMiddleware, roleMiddleware } from '../auth/auth-middleware.js';
import * as ERRORS from '../constants/service-errors.js';
import contestsData from '../data/contests-data.js';
import contestsService from '../services/contests-service.js';
import multer from 'multer';
import storage from './../storage.js';
import sharp from 'sharp';

const contestsController = express.Router();

contestsController
    .get('/',
        authMiddleware,
        roleMiddleware(['Photo Junkie', 'Organizer']),
        async (req, res) => {

            const { contests, error } = await contestsService.getAllContests(contestsData)();

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'Contests not found!' });
            } else {
                res.status(200).send(contests);
            }
        },
    )
    .get('/categories',
        // authMiddleware,
        async (req, res) => {

            const { categories, error } = await contestsService.getAllContestCategories(contestsData)();

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'Categories not found!' });
            } else {
                res.status(200).send(categories);
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
            const thumbnailName = `thumbnail-${req.file.filename}`;
            const date = new Date();

            await sharp(req.file.path)
                .resize(400, 300)
                .toFormat('jpeg')
                .jpeg({ quality: 90 })
                .toFile(`images/entries/thumbnails/${thumbnailName}`);

            const { error } = await contestsService.createNewPhotoRecord(contestsData)(title, description, fileName, thumbnailName, user_id, id, date);

            if (error) {
                res.status(500).send({ message: 'Internal Server Error' });
            } else {
                res.status(200).send({ path: fileName });
            }
        })
    .post('/:id/entries/:id/rate',
        authMiddleware,
        async (req, res) => {
            const photoId = req.params.id;
            const userId = req.user.id;
            const score = req.body.score || 0;
            const comment = req.body.comment || 'The photo does not really fit this category.';
            const isInappropriate = req.body.isInappropriate;

            const { error, review } = await contestsService.createPhotoReview(contestsData)(score, comment, isInappropriate, +userId, +photoId);

            if (error) {
                res.status(500).send({ message: 'Internal Server Error' });
            } else {
                res.status(200).send({ review: review });
            }
        });


export default contestsController;