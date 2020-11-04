import * as ERRORS from '../constants/service-errors.js';
import bcrypt from 'bcrypt';
import { DEFAULT_USER_ROLE } from '../constants/config.js';

/**
* Creates a new user record into the system. 
* @param module users data SQL queries module.
* @callback 
* @async
* @param {string} username - The unique username.
* @param {string} password - User password.
* @param {string} email - User's email.
* @return {Promise<object>}
*/
const createUser = usersData => {
    return async (userData) => {

        const { username, password, passwordConfirm, email, firstName, lastName } = userData;
        const existingUser = await usersData.checkIfUsernameIsFree(username);

        if (existingUser) {
            return {
                error: ERRORS.DUPLICATE_RECORD,
                user: null,
            };
        }

        if (password !== passwordConfirm) {
            return {
                error: ERRORS.NO_MATCH,
                user: null,
            };
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await usersData.createAccount(username, passwordHash, email, firstName, lastName, DEFAULT_USER_ROLE);

        return { error: null, user: user };
    };
};

export default {
    createUser,
};