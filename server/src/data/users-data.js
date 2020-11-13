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
* Finds a user in the database by username. 
* @async
* @param {string} username - The username of the  searched user.
* @returns {Promise<object>} Promise with the user data if found in the database.
*/
const getUserInfo = async (username) => {

    const sql = `
        SELECT
            u.id, u.username, u.password, r.type as role
        FROM
            users u
        JOIN
            roles r
        ON
            u.role_id = r.id
        WHERE 
            username = ?
    `;

    const result = await pool.query(sql, [username]);

    return result[0];
};


/**
* Gets user information found by unique user number.
* @param module users data SQL queries module.
* @callback 
* @async
* @param {number} id - The unique user number.
* @return {Promise<object>}
*/
const getById = async (id) => {

    const sql = `
        SELECT 
            u.id AS id, 
            u.username AS username, 
            u.email AS email, 
            u.firstName AS firstName,
            u.lastName AS lastName,
            u.points AS points,
            u.info AS info,
            r.type AS rank,
           (SELECT DATE_FORMAT(u.registerDate, "%M %d %Y")) AS registered
        FROM 
            users u
        JOIN    
            ranks r
        ON 
            u.rank_id = r.id
        WHERE 
            u.id = ?
    `;

    const result = await pool.query(sql, [id]);

    return result[0];
};

const getMessagesById = async (id) => {

    const sql = `
        SELECT 
            id AS messageId,
            message AS message,
            sendDate AS date,
            username AS username
        FROM
            messages
        WHERE 
            recepient_id = ?
    `;

    const result = await pool.query(sql, [id]);

    return result[0];
};

const sendMessage = async (message, recepientId, senderId) => {

    const sql = `
        INSERT INTO 
            messages (message, sendDate, recepient_id, sender_id)
        VALUES 
            (?, (SELECT NOW()), ?, ?)
    `;

    const result = await pool.query(sql, [message, recepientId, senderId]);

    return result[0];
};

const getAllHighLevelUsers = async () => {

    const sql = `
        SELECT 
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

const getCurrentContestsByUserId = async (id) => {

    const sql = `
        SELECT 
            u.id AS user, 
            u.points,
            c.id,
            c.title, 
            c.description,
            c.limit, 
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

export default {
    createAccount,
    getUserInfo,
    getById,
    getMessagesById,
    sendMessage,
    getAllHighLevelUsers,
    getCurrentContestsByUserId,
};