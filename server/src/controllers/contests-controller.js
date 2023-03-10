import express from 'express';
import { authMiddleware, roleMiddleware } from '../auth/auth-middleware.js';
import ERRORS from '../constants/service-errors.js';
import contestsData from '../data/contests-data.js';
import contestsService from '../services/contests-service.js';
import { createContestEntrySchema } from '../validations/schemas/create-contest-entry-schema.js';
import { createValidator } from '../validations/validator-middleware.js';
import multer from 'multer';
import storage from './../storage.js';
import sharp from 'sharp';

const contestsController = express.Router();

contestsController
    .get('/',
        authMiddleware,
        async (req, res) => {

            const { contests, error } = await contestsService.getAllOpenContests(contestsData)();

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'Contests not found!' });
            } else {
                res.status(200).send(contests);
            }
        },
    )
    .get('/private',
        authMiddleware,
        async (req, res) => {

            const userId = req.user.id;
            const { contests } = await contestsService.getAllPrivateContestsForUser(contestsData)(+userId);

            res.status(200).send(contests);
           
        },
    )
    .get('/phase/2',
        authMiddleware,
        roleMiddleware(['Organizer']),
        async (req, res) => {

            const { contestsPhaseTwo, error } = await contestsService.getPhaseTwoContests(contestsData)();

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'Contests not found!' });
            } else {
                res.status(200).send(contestsPhaseTwo);
            }
        },
    )
    .get('/phase/3',
        authMiddleware,
        roleMiddleware(['Organizer']),
        async (req, res) => {

            const { finishedContests, error } = await contestsService.getFinishedContests(contestsData)();

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'Contests not found!' });
            } else {
                res.status(200).send(finishedContests);
            }
        },
    )
    .get('/:id/entries/:id/voted',
        authMiddleware,
        roleMiddleware(['Organizer']),
        async (req, res) => {
            const userId = req.user.id;
            const photoId = req.params.id;
            const { hasVoted, error } = await contestsService.checkIfUserHasVoted(contestsData)(+userId, +photoId);

            if (error === ERRORS.OPERATION_NOT_PERMITTED) {
                res.status(500).send({ message: 'Internal Server Error!' });
            } else {
                res.status(200).send(hasVoted);
            }
        },
    )
    .get('/:id/results',
        authMiddleware,
        roleMiddleware(['Photo Junkie', 'Organizer']),
        async (req, res) => {

            const { id } = req.params;
            const { results, error } = await contestsService.getContestResults(contestsData)(+id);

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'Results not found!' });
            } else {
                res.status(200).send(results);
            }
        },
    )
    .get('/first-phase-exp',
        authMiddleware,
        async (req, res) => {

            const { recExpContests, error } = await contestsService.getRecentlyExpContests(contestsData)();

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'Contest not found!' });
            } else {
                res.status(200).send(recExpContests);
            }
        },
    )
    .get('/second-phase-exp',
    authMiddleware,
    roleMiddleware(['Organizer']),
    async (req, res) => {
        
        const userId = req.user.id;
        const { recExpContests, error } = await contestsService.getRecentlyExpSecondPhaseContests(contestsData)(+userId);
      
        if (error === ERRORS.RECORD_NOT_FOUND) {
            res.status(404).send({ message: 'Contest not found!' });
        } else {
            res.status(200).send(recExpContests);
        }
    },
)
    .get('/photos',
        async (req, res) => {

            const { photos, error } = await contestsService.getAllContestsTopRatedPhotos(contestsData)();

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'No photos found!' });
            } else {
                res.status(200).send(photos);
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
    .post('/',
        authMiddleware,
        roleMiddleware(['Organizer']),
        multer({ storage: storage }).single('image'),
        async (req, res) => {

            const organizer = req.user.id;
            const contestCover = req.file.filename;
            const { title,
                firstPhaseLimit,
                secondPhaseLimit,
                spots,
                restrictions,
                category,
                jury,
                privateContestParticipants,
            } = req.body;

            const { error, contest } = await contestsService.createContest(contestsData)(title, firstPhaseLimit, secondPhaseLimit, spots, contestCover, restrictions, category, +organizer, JSON.parse(jury), JSON.parse(privateContestParticipants));

            if (error) {
                res.status(500).send({ message: 'Internal Server Error!' });
            } else {
                res.status(200).send(contest);
            }
        },
    )
    .post('/:id/enrolled',
        authMiddleware,
        async (req, res) => {
            const userId = req.user.id;
            const contestId = req.params.id;

            const { enroll, error } = await contestsService.enrollUser(contestsData)(+userId, +contestId);

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'Contest not found!' });
            } else {
                res.status(200).send(enroll);
            }
        },
    )
    .delete('/:id/enrolled',
        authMiddleware,
        async (req, res) => {
            const userId = req.user.id;
            const contestId = req.params.id;

            const { enroll, error } = await contestsService.disenrollUser(contestsData)(+userId, +contestId);

            if (error === ERRORS.RECORD_NOT_FOUND) {
                res.status(404).send({ message: 'Contest not found!' });
            } else {
                res.status(200).send(enroll);
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
        createValidator(createContestEntrySchema),
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

            const { error } = await contestsService.createNewPhotoRecord(contestsData)(title, description, fileName, thumbnailName, +user_id, +id, date);

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