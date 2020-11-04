export const createUserSchema = {
    username: value => {
        if (!value) {
            return 'Username is required';
        }
        
        if (typeof value !== 'string' || value.trim().length < 5 || value.trim().length > 25) {
            return 'Username should be a string in range [3..25]';
        }

        return null;
    },
    password: value => {
        if (!value) {
            return 'Password is required';
        }
        
        if (typeof value !== 'string' || value.trim().length < 8 || value.trim().length > 100) {
            return 'Password should be a string in range [8..100]';
        }

        return null;
    },
    passwordConfirm: value => {
        if (!value) {
            return 'Password confirmation is required';
        }
        
        if (typeof value !== 'string' || value.trim().length < 8 || value.trim().length > 100) {
            return 'Password confirmation should be a string in range [8..100]';
        }

        return null;
    },
    firstName: value => {
        if (!value) {
            return 'First name is required';
        }
        
        if (typeof value !== 'string' || value.trim().length < 2 || value.trim().length > 40) {
            return 'First name should be a string in range [2..40]';
        }

        return null;
    },
    lastName: value => {
        if (!value) {
            return 'Last name is required';
        }
        
        if (typeof value !== 'string' || value.trim().length < 2 || value.trim().length > 40) {
            return 'Last name should be a string in range [2..100]';
        }

        return null;
    },
    email: value => {
        if (!value) {
            return 'Email is required';
        }

        const check = new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/);
        if(!check.test(value)){
            return 'Enter a valid email';
        }

        return null;
    },
};
