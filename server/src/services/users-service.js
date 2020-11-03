import serviceErrors from './service-errors.js';
import bcrypt from 'bcrypt';
import { DEFAULT_USER_ROLE } from './../config.js';

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
        const { username, password, passwordConfirm, email } = userData;

        const existingUser = await usersData.getWithRole(username);

        if (existingUser) {
            return {
                error: serviceErrors.DUPLICATE_RECORD,
                user: null,
            };
        }

        if (password !== passwordConfirm) {
            return {
                error: serviceErrors.NO_MATCH,
                user: null,
            };
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await usersData.createAccount(username, passwordHash, email, DEFAULT_USER_ROLE);

        return { error: null, user: user };
    };
};

export default {
    createUser,
};