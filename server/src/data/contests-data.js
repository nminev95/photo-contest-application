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

    const res = await pool.query(sql, [id]);

    return res[0];
};

export default {
    getAllContestsInfo,
    getContestInfo,
};