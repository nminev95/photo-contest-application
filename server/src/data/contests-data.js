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
            contests     
    `;

    return await pool.query(sql);
};

/**
* Gets contests information found by unique contest number.
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

const sendPhotoReview = async (score, comment, isInappropriate, userId, photoId) => {
    const sql = `
        INSERT INTO
            reviews (score, comment, isInappropriate, user_id, photo_id)
        VALUES 
            (?, ?, ?, ?, ?)
    `;

    return await pool.query(sql, [score, comment, isInappropriate, userId, photoId]);
};

const createNewContest = async (title, description, firstPhaseLimit, secondPhaseLimit, spots, contestCover, restrictions_id, category, organizer_id) => {
    const sql = `
        INSERT INTO 
            contests (title, description, firstPhaseLimit, secondPhaseLimit, spots, contestCover, restrictions_id, category, organizer_id)
        VALUES
            (? ,? , (SELECT NOW() + INTERVAL ? DAY), (SELECT NOW() + INTERVAL ? HOUR), ?, ?, (SELECT id from contest_restrictions WHERE type = ?), ?, ?)
    `;

    return await pool.query(sql, [title, description, firstPhaseLimit, secondPhaseLimit, spots, contestCover, restrictions_id, category, organizer_id]);
};

export default {
    getAllContestsInfo,
    getContestInfo,
    setNextPhase,
    sendNewPhotoInfo,
    sendPhotoReview,
    createNewContest,
};