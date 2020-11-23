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
        ORDER BY scores DESC
    `;

    return await pool.query(sql);
};

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
* Gets recently expire 4 contests information from the database.
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