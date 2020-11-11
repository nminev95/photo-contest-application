import pool from '../data/pool.js';


const getAllContestsInfo = async () => {

    const sql = `
        SELECT 
            *
        FROM
            contests     
    `;

    return await pool.query(sql);
};

const getAllContestEntries = async (id) => {
    const sql = `
        SELECT 
            user_id, (SELECT username FROM users WHERE id = user_id) as username 
        FROM 
            photos 
        WHERE 
            contest_id = ?;
    `;

    return await pool.query(sql, [id]);
};

const getContestInfo = async (id) => {

    const sql = `
        SELECT 
            *
        FROM
            contests
        WHERE
            id = ?
    `;

    const res = await pool.query(sql, [id, id]);

    return res[0];
};

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



const sendNewPhotoInfo = async (title, description, fileName, user_id, id, date) => {
    const sql = `
        INSERT INTO 
          photos (title, story, file, user_id, contest_id, date)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    return await pool.query(sql, [title, description, fileName, user_id, id, date]);
};

const getAllCategories = async () => {
    const sql = `
    SELECT
        type
    FROM
        contest_categories`;

    return await pool.query(sql);
};

export default {
    getAllContestsInfo,
    getContestInfo,
    setNextPhase,
    sendNewPhotoInfo,
    getAllCategories,
    getAllContestEntries,
};