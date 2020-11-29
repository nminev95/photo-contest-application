import pool from '../data/pool.js';

const getNotificationsById = async (id) => {
    const sql1 = `
        SELECT 
            contest_id, user_id, 
            (SELECT title FROM contests WHERE id = contest_id) as contest, 
            (SELECT username FROM users WHERE id = (SELECT organizer_id FROM contests WHERE id = contest_id)) as invitedBy,
            isRead
        FROM 
            contest_jury_invitations
        WHERE 
            user_id = ?
        `;

    const sql2 = `
        SELECT
            contest_id, user_id, 
            (SELECT title FROM contests WHERE id = contest_id) as contest,
            (SELECT username FROM users WHERE id = (SELECT organizer_id FROM contests WHERE id = contest_id)) as invitedBy,
            isRead

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

const changeNotificationToRead = async (userId, contestId) => {

    const sql1 = `
        UPDATE 
            contest_jury_invitations
        SET 
            isRead = 1
        WHERE 
            user_id = ?
        AND 
            contest_id = ?
    `;

    const sql2 = `
        UPDATE 
            contest_jury_invitations
        SET 
            isRead = 1
        WHERE 
            user_id = ?
        AND 
            contest_id = ?
    `;

    await pool.query(sql1, [userId, contestId]);
    await pool.query(sql2, [userId, contestId]);
};

export default {
    getNotificationsById,
    changeNotificationToRead,
};