import pool from '../data/pool.js';

const getNotificationsById = async (id) => {
    const sql1 = `
        SELECT 
            * 
        FROM 
            contest_jury_invitations
        WHERE 
            user_id = ?
        `;

    const sql2 = `
        SELECT
            *
        FROM
            private_contest_invitations
        WHERE 
            user_id = ?
    `;

    const notifications = {
        juryInvitations: await pool.query(sql1, [id]),
        privateContestInvitations: await pool.query(sql2, [id]),
    };

    return notifications;
};

export default {
    getNotificationsById,
};