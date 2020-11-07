import pool from '../data/pool.js';

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
    getContestInfo,
};