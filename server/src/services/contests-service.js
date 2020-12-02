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

        const contest = await contestsData.getContestInfo(+id);

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
const getAllOpenContests = contestsData => {
    return async () => {
        const contests = await contestsData.getAllOpenContestsInfo();

        if (!contests.length) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                contests: null,
            };
        }

        return { error: null, contests: contests };
    };
};

/**
* Gets Phase II contests information.
* @param module contests data SQL queries module.
* @callback 
* @async
* @return {Promise<object>}
*/
const getPhaseTwoContests = contestsData => {
    return async () => {
        const contestsPhaseTwo = await contestsData.getPhaseTwoContestsInfo();

        if (!contestsPhaseTwo.length) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                contestsPhaseTwo: null,
            };
        }

        return { error: null, contestsPhaseTwo: contestsPhaseTwo };
    };
};

/**
* Gets Phase II contests information.
* @param module contests data SQL queries module.
* @callback 
* @async
* @return {Promise<object>}
*/
const getFinishedContests = contestsData => {
    return async () => {
        const finishedContests = await contestsData.getFinishedContestsInfo();

        if (!finishedContests.length) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                finishedContests: null,
            };
        }

        return { error: null, finishedContests: finishedContests };
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
        let currentPhase;

        if (!contest) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                contest: null,
            };
        }

        if (new Date() > contest.firstPhaseLimit) {
            await contestsData.setNextPhase(+id, 1);
            currentPhase = 2;
        }

        if (new Date() > contest.secondPhaseLimit) {
            await contestsData.setNextPhase(+id, 2);
            currentPhase = 3;
        }

        return {
            error: null,
            contest:
            {
                ...contest,
                phase_id: currentPhase,
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
* @param {number} score - The amount of given scores by the jury member.
* @param {string} comment - A short comment of the uploaded photo.
* @param {boolean} confirmation - Confirms if the upploaded photo is inappropriate.
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
    return async (title, firstPhaseLimit, secondPhaseLimit, spots, contestCover, restrictions, category, organizer, jury, privateContestParticipants) => {

        let newContest;

        if (privateContestParticipants.length === 0) {
            newContest = await contestsData.createNewContest(title, firstPhaseLimit, secondPhaseLimit, spots, contestCover, restrictions, category, organizer);
        } else {
            newContest = await contestsData.createNewContest(title, firstPhaseLimit, secondPhaseLimit, privateContestParticipants.length, contestCover, restrictions, category, organizer);
            await privateContestParticipants.map((user) => contestsData.sendPrivateContestInvitations(newContest.id, user.id));
            await privateContestParticipants.map((user) => contestsData.awardPrivateContestParticipationPoints(user.id));
        }

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
                privateContestParticipants,
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

/**
* Gets contest full information found by unique contest number.
* @param module contests data SQL queries module.
* @callback 
* @async
* @param {number} id - The unique contest number.
* @return {Promise<object>}
*/
const getContestResults = contestsData => {
    return async (id) => {
        const results = await contestsData.getAllContestResults(id);

        if (!results) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                results: null,
            };
        }

        const mapResultsWithReviews = results.reduce((acc, entryResults) => {

            const { id, title, story, originalSize, thumbnailSize, date, rating, comment, score, review_id, username, avatarUrl, authorAvatar, author, reviewAuthorPoints, reviewAuthorRank } = entryResults;
            const addDate = date.toISOString().split('T')[0];

            if (!acc.get(id)) {
                acc.set(id, {
                    id, title, story, originalSize, thumbnailSize, addDate, rating, author, authorAvatar, reviews: [],
                });
            }

            const reviewObject = {
                id: review_id,
                score,
                comment,
                username,
                avatarUrl,
                reviewAuthorRank,
                reviewAuthorPoints,
            };

            if (reviewObject.id) {
                acc.get(id).reviews.push(reviewObject);
            }

            return acc;
        }, new Map());

        return { error: null, results: [...mapResultsWithReviews.values()] };
    };
};


const getUserScores = contestsData => {
    return async (id) => {
        const contest = await contestsData.getContestInfo(id);
        const scoresAndRanking = await contestsData.getUserResults(id);

        return scoresAndRanking;
    };
};

/**
* Gets unawared contest information.
* @param module contests data SQL queries module.
* @callback 
* @async
* @return {Promise<object>}
*/
const getFinishedAndUnawardedContests = contestsData => {
    return async () => {

        const contests = await contestsData.getUnawardedContests();

        if (contests.length === 0) {
            return;
        }

        return contests;
    };
};

/**
* Saves points record in the database when a contest finishes.
* @param module contests data SQL queries module.
* @callback 
* @async
* @return {Promise<object>}
*/
const awardPointsForFinishedContests = usersData => {
    return async () => {
        const contests = await getFinishedAndUnawardedContests(contestsData)();

        if (!contests) {
            return;
        }

        contests.map(async (contest) => {
            const scores = await getUserScores(contestsData)(contest.id);
            const firstThree = [];

            const userScoresMap = await scores.reduce((acc, score) => {
                if (!acc.get(score.rating)) {
                    acc.set(score.rating, [score.user_id]);
                } else {
                    acc.get(score.rating).push(score.user_id);
                }

                return acc;
            }, new Map());

            await userScoresMap.forEach((value, key) => {
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

            await usersData.addUserPoints(firstPlacePoints, firstThree[0].users);
            await usersData.addUserPoints(secondPlacePoints, firstThree[1].users);
            await usersData.addUserPoints(thirdPlacePoints, firstThree[2].users);
            await contestsData.markContestAwarded(contest.id);
        });
    };
};

const enrollUser = contestsData => {
    return async (userId, contestId) => {
        const contest = await contestsData.getContestInfo(contestId);

        if (!contest) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                contest: null,
            };
        }

        await contestsData.enrollUserInContest(userId, contestId);
        await contestsData.awardParticipationPoints(userId);

        return {
            error: null,
            enroll: {
                userId,
                contestId,
            },
        };
    };
};

const disenrollUser = contestsData => {
    return async (userId, contestId) => {
        const contest = await contestsData.getContestInfo(contestId);

        if (!contest) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                contest: null,
            };
        }

        await contestsData.disenrollUserFromContest(userId, contestId);
        await contestsData.removeParticipationPoints(userId);

        return {
            error: null,
            enroll: {
                userId,
                contestId,
            },
        };
    };
};

export default {
    getContestById,
    getAllOpenContests,
    setNextContestPhase,
    createNewPhotoRecord,
    createPhotoReview,
    createContest,
    getAllContestsTopRatedPhotos,
    getRecentlyExpContests,
    getContestResults,
    getUserScores,
    getFinishedAndUnawardedContests,
    getPhaseTwoContests,
    getFinishedContests,
    awardPointsForFinishedContests,
    enrollUser,
    disenrollUser,
};










