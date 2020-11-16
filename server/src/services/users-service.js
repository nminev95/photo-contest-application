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
        const existingUser = await usersData.getUserInfo(username);

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

/**
* Signing in the user.
* @param module user data SQL queries module.
* @callback 
* @async
* @param {string} username - The unique username.
* @param {string} password - User password.
* @return {Promise<object>}
*/
const signInUser = usersData => {
    return async (username, password) => {
        const user = await usersData.getUserInfo(username);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return {
                error: ERRORS.INVALID_SIGNIN,
                user: null,
            };
        }

        return {
            error: null,
            user: user,
        };
    };
};

/**
* Gets user information found by unique user number.
* @param module users data SQL queries module.
* @callback 
* @async
* @param {number} id - The unique user number.
* @return {Promise<object>}
*/
const getUserById = usersData => {
    return async (id) => {
        const user = await usersData.getById(id);

        if (!user) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                user: null,
            };
        }

        return { error: null, user: user };
    };
};

/**
* Gets all users at the highest level found in the database.
* @param module users data SQL queries module.
* @callback 
* @async
* @return {Promise<object>}
*/
const getHighLevelUsers = usersData => {
    return async () => {

        const users = await usersData.getAllHighLevelUsers();

        if (!users) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                users: null,
            };
        }

        return { error: null, users: users };
    };
};

/**
* Gets user current contests found by unique user number.
* @param module users data SQL queries module.
* @callback 
* @async
* @param {number} id - The unique user number.
* @return {Promise<object>}
*/
const getUserCurrentContests = usersData => {
    return async (id) => {
        
        const contests = await usersData.getCurrentContestsByUserId(id);
        
        if (!contests.length) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                contests: null,
            };
        }
        
        return { error: null, contests: contests };
    };
};
/**
* Gets user uploaded photos.
* @param module users data SQL queries module.
* @callback 
* @async
* @param {number} id - The unique user number.
* @return {Promise<object>}
*/
const getUserPastContests = usersData => {
    return async (id) => {
        
        const pastContests = await usersData.getPastContestsByUserId(id);
       
        if (!pastContests.length) {
            return {
                error: ERRORS.RECORD_NOT_FOUND,
                pastContests: null,
            };
        }
        
        return { error: null, pastContests: pastContests };
    };
};

export default {
    createUser,
    signInUser,
    getUserById,
    getHighLevelUsers,
    getUserCurrentContests,
    getUserPastContests,
};