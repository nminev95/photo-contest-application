import pool from '../data/pool.js';

/**
* Gets all contests information from the database.
* @async
* @return {Promise<object>}
*/
const getAllContestsInfo = async () => {

    const sql = `
        SELECT 
            *
        FROM
            contests c
        WHERE NOT 
            c.phase_id=3 
    `;

    return await pool.query(sql);
};

/**
* Gets contest's information found by unique contest number.
* @async
* @param {number} id - The unique contest number.
* @return {Promise<object>}
*/
const getContestInfo = async (id) => {

    const sql1 = `
        SELECT 
            id, user_id, (SELECT username FROM users WHERE id = user_id) as username, title, story, date, originalSize, thumbnailSize
        FROM 
            photos 
        WHERE 
            contest_id = ?;
    `;

    const sql2 = `
        SELECT 
            *
        FROM
            contests
        WHERE
            id = ?
    `;

    const entries = await pool.query(sql1, [id]);
    const contest = await pool.query(sql2, [id]);

    contest[0].entries = entries;

    return contest[0];
};

/**
* Updates the contest phase.
* @async
* @param {number} id - The unique contest number.
* @param {number} id - The unique phase number.
* @return {Promise<object>}
*/
const setNextPhase = async (id, currentPhase) => {

    const sql = `
        UPDATE
            contests
        SET phase_id = ?
        WHERE
            id = ?
    `;

    return await pool.query(sql, [currentPhase + 1, id]);
};

/**
* Saves a new photo record in the database. 
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
const sendNewPhotoInfo = async (title, description, fileName, thumbnailName, user_id, id, date) => {
    const sql = `
        INSERT INTO 
           photos (title, story, originalSize, thumbnailSize, user_id, contest_id, date)
        VALUES 
            (?, ?, ?, ?, ?, ?, ?)
    `;

    return await pool.query(sql, [title, description, fileName, thumbnailName, user_id, id, date]);
};

/**
* Saves a new photo review record in the database. 
* @async
* @param {string} comment - A short comment of the uploaded photo.
* @param {boolean} confirmation - Confirms if the upploaded photo is inappropriate.
* @param {number} score - The amount of given scores by the jury member.
* @param {number} userId - The unique user  number.
* @param {number} photoId - The unique photo number.
* @return {Promise<object>}
*/
const sendPhotoReview = async (score, comment, isInappropriate, userId, photoId) => {
    const sql = `
        INSERT INTO
            reviews (score, comment, isInappropriate, user_id, photo_id)
        VALUES 
            (?, ?, ?, ?, ?)
    `;

    return await pool.query(sql, [score, comment, isInappropriate, userId, photoId]);
};

/**
* Saves a new contest record in the database. 
* @async
* @param {string} title - The title of the uploaded contest.
* @param {number} date - First phase time limit.
* @param {number} date - Second phase time limit.
* @param {number} spots - The number of participants allowed to take part in the contest.
* @param {string} filename - The name of the contest cover file.
* @param {number} restriction_id - The unique restriction number.
* @param {string} category - The contest category.
* @param {number} organizer_id - The unique organizator number.
* @return {Promise<object>}
*/
const createNewContest = async (title, firstPhaseLimit, secondPhaseLimit, spots, contestCover, restrictions_id, category, organizer_id) => {
    const sql = `
        INSERT INTO 
            contests (title, firstPhaseLimit, secondPhaseLimit, spots, contestCover, restrictions_id, category, organizer_id)
        VALUES
            (?, (SELECT NOW() + INTERVAL ? DAY), (SELECT NOW() + INTERVAL ? HOUR), ?, ?, (SELECT id from contest_restrictions WHERE type = ?), ?, ?)
    `;

    const sql2 = `
        SELECT 
            id 
        FROM 
            contests 
        ORDER BY
            id 
        DESC 
        LIMIT 1
    `;

    await pool.query(sql, [title, firstPhaseLimit, secondPhaseLimit, spots, contestCover, restrictions_id, category, organizer_id]);
    const res = await pool.query(sql2);

    const newContest = {
        id: res[0].id,
        title,
        firstPhaseLimit,
        secondPhaseLimit,
        spots,
        contestCover,
        restrictions_id,
        category,
        organizer_id,
    };
    return newContest;
};

/**
* Gets 4 top rated photos info from the database.
* @async
* @return {Promise<object>}
*/
const getTopRatedPhotos = async () => {
    const sql = `
        SELECT  
            contest_id,
            title,
            photo_id,
            thumbnailSize,
            MAX(score) AS scores
        FROM     
            (SELECT contest_id,
                title,
                photo_id,
                thumbnailSize,
                SUM(score) AS score
            FROM            
                (SELECT 
                    c.id AS contest_id,
                    c.title,
                    ph.id AS photo_id,
                    ph.thumbnailSize,    
                    r.score
                FROM 
                    contests c
                JOIN
                    photos ph
                ON
                    c.id = ph.contest_id
                LEFT JOIN   
                    reviews r
                ON 
                    ph.id = r.photo_id) AS info
                GROUP BY info.photo_id ) AS i
            GROUP BY i.contest_id
        ORDER BY scores 
        DESC
        LIMIT 4
    `;

    return await pool.query(sql);
};

/**
* Saves a record jury invitation in the database.
* @async
* @param {number} contestId - The unique contest number.
* @param {number} userId - The unique user number.
* @return {Promise<object>}
*/
const sendJuryInvitations = async (contestId, userId) => {
    const sql = `
        INSERT INTO 
            contest_jury_invitations (contest_id, user_id)
        VALUES
            (?, ?)
    `;

    return await pool.query(sql, [contestId, userId]);
};

/**
* Gets 4 recently expire contests information from the database.
* @async
* @return {Promise<object>}
*/
const getRecentlyExpireContestsInfo = async () => {

    const sql = `
        SELECT * 
        FROM 
            contests 
        WHERE 
            firstPhaseLimit > NOW() 
        ORDER BY 
            firstPhaseLimit ASC
        LIMIT 
            4   
    `;

    return await pool.query(sql);
};


export default {
    getAllContestsInfo,
    getContestInfo,
    setNextPhase,
    sendNewPhotoInfo,
    sendPhotoReview,
    createNewContest,
    getTopRatedPhotos,
    sendJuryInvitations,
    getRecentlyExpireContestsInfo,
};