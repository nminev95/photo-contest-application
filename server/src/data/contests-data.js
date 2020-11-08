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

export default {
    getAllContestsInfo,
    getContestInfo,
    setNextPhase,
};