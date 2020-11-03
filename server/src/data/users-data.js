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
const createAccount = async (username, password, email, role) => {
    const sql = `
        INSERT INTO 
            users (username, password, email, role_id, register_date)
        VALUES 
            (?,?,?, (SELECT role_id FROM roles WHERE type_of_user = ?), (SELECT NOW()));
    `;

    const result = await pool.query(sql, [username, password, email, role]);


    return {
        id: result.insertId,
        username: username,
    };
};

export default {
    createAccount,
};