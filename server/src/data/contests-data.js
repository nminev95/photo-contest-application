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

const getContestInfo = async (id) => {

    const sql = `
        SELECT 
            *
        FROM
            contests
        WHERE
            id = ?
    `;

    return await pool.query(sql, [id]);
};

export default {
    getAllContestsInfo,
    getContestInfo,
};