import pool from '../data/pool.js';

const getNotificationsById = async (id) => {
    const sql1 = `
        SELECT 
            contest_id, user_id, 
            (SELECT title FROM contests WHERE id = contest_id) as contest, 
            (SELECT username FROM users WHERE id = (SELECT organizer_id FROM contests WHERE id = contest_id)) as invitedBy
        FROM 
            contest_jury_invitations
        WHERE 
            user_id = ?
        `;

    const sql2 = `
        SELECT
            contest_id, user_id, 
            (SELECT title FROM contests WHERE id = contest_id) as contest,
            (SELECT username FROM users WHERE id = (SELECT organizer_id FROM contests WHERE id = contest_id)) as invitedBy
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