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
        
        return { error: null, contest: contest };
    };
};
/**
* Gets all contests information from the database.
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

const getContestEntries = contestsData => {
    return async (id) => {
        const entries = await contestsData.getAllContestEntries(id);

        if (!entries) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                contests: null,
            };
        }

        return { error: null, entries: entries };
    };
};

const getAllContestCategories = contestsData => {
    return async () => {
        const categories = await contestsData.getAllCategories();

        if (!categories) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                categories: null,
            };
        }

        return { error: null, categories: categories };
    };
};

const setNextContestPhase = contestsData => {
    return async (id) => {
        const contest = await contestsData.getContestInfo(id);

        if (!contest) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                contest: null,
            };
        }
        const currentPhase = contest.phase_id;
        const nextPhase = await contestsData.setNextPhase(id, +currentPhase);

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
* Saves a record for a photo in the database.
* @param module contest data SQL queries module.
* @callback 
* @async
* @param {string} id - The title of the photo.
* @param {string} id - The description of the new photo.
* @param {string} id - The file name of the new photo.
* @return {Promise<object>}
*/
const createNewPhotoRecord = contestsData => {
    return async (title, description, fileName, user_id, id, date) => {
        const result = await contestsData.sendNewPhotoInfo(title, description, fileName, user_id, id, date);

        return { error: result.affectedRows > 0 ? null : ERRORS.UNSPECIFIED_ERROR };
    };
};

export default {
    getContestById,
    getAllContests,
    setNextContestPhase,
    createNewPhotoRecord,
    getAllContestCategories,
    getContestEntries,
};










