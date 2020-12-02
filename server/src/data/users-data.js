import pool from './pool.js';

/** 
* Creates a new user in the database. 
* @async
* @param {string} username - The unique username of the new user.
* @param {string} password - The user pasword.
* @param {string} email - The user email.
* @param {number} id - The unique role number of the created user.
* @returns {Promise<object>} Promise.
*/
const createAccount = async (username, password, email, firstName, lastName, role) => {

    const sql = `
        INSERT INTO 
            users (username, password, email, firstName, lastName, role_id, registerDate)
        VALUES 
            (?, ?, ?, ?, ?, (SELECT id FROM roles WHERE type = ?), (SELECT NOW()))
    `;

    const result = await pool.query(sql, [username, password, email, firstName, lastName, role]);


    return {
        id: result.insertId,
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
    };
};

/**
* Gets user information found by unique user number.
* @async
* @param {number} id - The unique user number.
* @return {Promise<object>}
*/
const getUserInfo = async (id, username) => {

    const sql = `
        SELECT 
            u.id AS id, 
            u.username AS username,
            u.password AS password, 
            u.email AS email, 
            u.firstName AS firstName,
            u.lastName AS lastName,
            u.points AS points,
            (SELECT type FROM roles WHERE id = u.role_id) AS role,
            u.info AS info,
            r.type AS rank,
            (SELECT DATE_FORMAT(u.registerDate, "%M %d %Y")) AS registered,
            u.avatarUrl as avatar
        FROM 
            users u
        JOIN    
            ranks r
        ON 
            u.rank_id = r.id
        WHERE 
            (u.id IS NULL OR u.id = ?)
        OR 
            (u.username IS NULL OR u.username = ?)
    `;

    const result = await pool.query(sql, [id, username]);

    return result[0];
};

/**
* Gets all high level users from the database.
* @async
* @return {Promise<object>}
*/
const getAllHighLevelUsers = async () => {

    const sql = `
        SELECT 
            id,
            avatarUrl AS avatar,
            username,
            rank_id AS rank
        FROM
            users
        WHERE 
            rank_id > 2
    `;

    return await pool.query(sql);
};

/**
* Gets all user current contests found by unique user number.
* @async
* @param {number} id - The unique user number.
* @return {Promise<object>}
*/
const getCurrentContestsByUserId = async (id) => {

    const sql = `
        SELECT 
            u.id AS user, 
            u.points,
            c.id,
            c.title, 
            c.firstPhaseLimit,
            c.secondPhaseLimit,
            c.spots, 
            c.contestCover,
            c.phase_id
        FROM
            users u
        LEFT JOIN 
            photos ph
        ON       
            u.id = ph.user_id
        LEFT JOIN 
            contests c
        ON
            ph.contest_id = c.id       
        WHERE 
            u.id = ? 
        AND NOT 
            phase_id=3;
    `;

    return await pool.query(sql, [id]);
};

/**
* Gets all user current contests found by unique user number.
* @async
* @param {number} id - The unique user number.
* @return {Promise<object>}
*/
const getPastContestsByUserId = async (id) => {

    const sql = `
        SELECT 
            u.id AS user, 
            u.points,
            c.id,
            c.title, 
            c.spots, 
            c.contestCover,
            c.phase_id
        FROM
            users u
        LEFT JOIN 
            photos ph
        ON       
            u.id = ph.user_id
        LEFT JOIN 
            contests c
        ON
            ph.contest_id = c.id       
        WHERE 
            u.id = ? 
        AND  
            phase_id=3;
    `;

    return await pool.query(sql, [id]);
};

/**
* Gets all users, ordered by ranking from the database.
* @async
* @return {Promise<object>}
*/
const getAllUsersOrderedByRanking = async () => {

    const sql = `
        SELECT
	        id, 
            username, 
	        firstName,
            lastName,
            avatarUrl, 
	        points, 
            (SELECT type FROM ranks  WHERE id = rank_id) AS rank
        FROM 
            users 
        WHERE 
            role_id = 1
        ORDER BY 
            points
        DESC
    `;

    return await pool.query(sql);
};

/**
* Adds points to users accounts. 
* @async
* @param {number} points - Points to be added.
* @param {number} ids - The unique users numbers.
* @return {Promise<object>}
*/
const addUserPoints = async (points, ids) => {

    ids.map(async (id) => {

        const sql = `
            UPDATE 
                users
            SET 
                points = points + ?
            WHERE 
                id = ?
        
        `;

        return await pool.query(sql, [points, id]);
    });
};

/**
* Changes notification status.
* @async
* @param {number} id - The unique user number.
* @param {number} id - The unique contest number.
* @return {Promise<object>}
*/
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
            private_contest_invitations
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

/**
* Gets all user notifications.
* @async
* @param {number} id - The unique user number.
* @return {Promise<object>}
*/
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

/**
* Gets all users from the database.
* @async
* @return {Promise<object>}
*/
const getAllUsersFromDatabase = async () => {
    const sql =
        `SELECT
            id,
            avatarUrl AS avatar,
            username,
            rank_id AS rank
        FROM
            users`;

    return await pool.query(sql);
};

export default {
    createAccount,
    getUserInfo,
    getAllHighLevelUsers,
    getCurrentContestsByUserId,
    getPastContestsByUserId,
    getAllUsersOrderedByRanking,
    addUserPoints,
    changeNotificationToRead,
    getNotificationsById,
    getAllUsersFromDatabase,
};