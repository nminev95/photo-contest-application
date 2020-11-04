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
* Check if a username in the database is free. 
* @async
* @param {string} username - The username to be checked.
* @returns {Promise<object>} Promise with the user data if found in the database.
*/
const checkIfUsernameIsFree = async (username) => {

    const sql = `
        SELECT 
            *
        FROM 
            users 
        WHERE 
            username = ?
    `;

    const result = await pool.query(sql, [username]);

    return result[0];
};

export default {
    createAccount,
    checkIfUsernameIsFree,
};