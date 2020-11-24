/* eslint-disable no-unused-vars */
import contestsData from '../data/contests-data.js';
import ERRORS from './../constants/service-errors.js';

/**
* Gets contest information found by unique contest number.
* @param module contests data SQL queries module.
* @callback 
* @async
* @param {number} id - The unique contest number.
* @return {Promise<object>}
*/
const getContestById = contestsData => {
    return async (id) => {
        const contest = await contestsData.getContestInfo(id);

        if (!contest) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                contest: null,
            };
        }

        let currentPhase = 1;

        if (contest.firstPhaseLimit < new Date() && contest.secondPhaseLimit > new Date()) {
            await contestsData.setNextPhase(id, 1);
            currentPhase = 2;
        }

        if (contest.secondPhaseLimit < new Date()) {
            await contestsData.setNextPhase(id, 2);
            currentPhase = 3;
        }

        return {
            error: null, contest:
            {
                ...contest,
                phase_id: currentPhase,
            },
        };
    };
};

/**
* Gets all contests information.
* @param module contests data SQL queries module.
* @callback 
* @async
* @return {Promise<object>}
*/
const getAllContests = contestsData => {
    return async () => {
        const contests = await contestsData.getAllContestsInfo();

        if (!contests) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                contests: null,
            };
        }

        return { error: null, contests: contests };
    };
};

/**
* Sets the next contest phase.
* @param module contests data SQL queries module.
* @callback 
* @async
* @param {number} id - The unique contest number.
* @return {Promise<object>}
*/
const setNextContestPhase = contestsData => {
    return async (id) => {
        const contest = await contestsData.getContestInfo(+id);

        if (!contest) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                contest: null,
            };
        }
        const currentPhase = contest.phase_id;
        await contestsData.setNextPhase(+id, +currentPhase);

        return {
            error: null,
            contest:
            {
                ...contest,
                phase_id: contest.phase_id + 1,
            },
        };
    };
};

/**
* Saves a photo record.
* @param module contest data SQL queries module.
* @callback 
* @async
* @param {string} title - The title of the uploaded photo.
* @param {string} description - A short description of the uploaded photo.
* @param {string} filename - The name of the uploaded photo file.
* @param {number} size - The size of the photo.
* @param {number} id - The unique user  number.
* @param {number} id - The unique contest number.
* @param {number} date - Current date.
* @return {Promise<object>}
*/
const createNewPhotoRecord = contestsData => {
    return async (title, story, fileName, thumbnailName, user_id, id, date) => {
        const result = await contestsData.sendNewPhotoInfo(title, story, fileName, thumbnailName, user_id, id, date);

        return { error: result.affectedRows > 0 ? null : ERRORS.UNSPECIFIED_ERROR };
    };
};
/**
* Saves a new photo review record in the database. 
* @param module contest data SQL queries module.
* @callback 
* @async
* @param {string} comment - A short comment of the uploaded photo.
* @param {boolean} confirmation - Confirms if the upploaded photo is inappropriate.
* @param {number} score - The amount of given scores by the jury member.
* @param {number} userId - The unique user  number.
* @param {number} photoId - The unique photo number.
* @return {Promise<object>}
*/
const createPhotoReview = contestsData => {
    return async (score, comment, isInappropriate, userId, photoId) => {
        if (isInappropriate === 'true' || isInappropriate === true) {
            await contestsData.sendPhotoReview(0, 'The photo does not really fit this category.', 1, userId, photoId);
        } else {
            await contestsData.sendPhotoReview(score, comment, 0, userId, photoId);
        }

        return {
            review: {
                score: score || 0,
                comment: comment,
            },
        };
    };
};

/**
* Saves a contest record.
* @param module contest data SQL queries module.
* @callback 
* @async
* @param {string} title - The title of the uploaded contest.
* @param {number} date - First phase time limit.
* @param {number} date - Second phase time limit.
* @param {number} spots - The number of participants allowed to take part in the contest.
* @param {string} filename - The name of the contest cover file.
* @param {number} restriction_id - The unique restriction number.
* @param {string} category - The contest category.
* @param {number} organizer_id - The unique organizator number.
* @param {object} jury - Optional jury members.
*/
const createContest = contestsData => {
    return async (title, firstPhaseLimit, secondPhaseLimit, spots, contestCover, restrictions, category, organizer, jury) => {

        const newContest = await contestsData.createNewContest(title, firstPhaseLimit, secondPhaseLimit, spots, contestCover, restrictions, category, organizer);
        const allOrganizers = await contestsData.getAllOrganizersForJury();

        if (jury.length !== 0) {
            await jury.map((user => {
                contestsData.sendJuryInvitations(newContest.id, user.id);
            }));
        }

        await allOrganizers.map((user) => {
            contestsData.sendJuryInvitations(newContest.id, user.id);
        });

        return {
            error: newContest.affectedRows > 0 ? null : ERRORS.UNSPECIFIED_ERROR,
            contest: {
                ...newContest,
                jury: [...jury, ...allOrganizers],
            },
        };
    };
};

/**
* Gets top rated photos information from the database.
* @param module contests data SQL queries module.
* @callback 
* @async
* @return {Promise<object>}
*/
const getAllContestsTopRatedPhotos = contestsData => {
    return async () => {
        const photos = await contestsData.getTopRatedPhotos();

        if (!photos) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                photos: null,
            };
        }

        return { error: null, photos: photos };
    };
};

/**
* Gets recently expire contests information from the database.
* @param module contests data SQL queries module.
* @callback 
* @async
* @return {Promise<object>}
*/
const getRecentlyExpContests = contestsData => {
    return async () => {
        const recExpContests = await contestsData.getRecentlyExpireContestsInfo();

        if (!recExpContests) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                recExpContests: null,
            };
        }

        return { error: null, recExpContests: recExpContests };
    };
};

const getContestResults = contestsData => {
    return async (id) => {
        const results = await contestsData.getAllContestResults(id);

        if (!results) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                results: null,
            };
        }

        return { error: null, results: results };
    };
};

export default {
    getContestById,
    getAllContests,
    setNextContestPhase,
    createNewPhotoRecord,
    createPhotoReview,
    createContest,
    getAllContestsTopRatedPhotos,
    getRecentlyExpContests,
    getContestResults,
};










