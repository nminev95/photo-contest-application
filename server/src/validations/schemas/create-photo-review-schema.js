export const createPhotoReviewSchema = {
    score: value => {
        if (!value) {
            return 'Score value is required';
        }
        
        if (isNaN(value) || +value > 10 || +value < 10) {
            return 'Score value should be a number in range [0..10]';
        }

        return null;
    },
    comment: value => {
        if (!value) {
            return 'Photo comment is required';
        }
        
        if (typeof value !== 'string' || value.trim().length < 1 || value.trim().length > 245) {
            return 'Description should be a string in range [1..245]';
        }

        return null;
    },
    isInappropriate: value => {
        if (!!value !== true && !!value !== false) {
            return 'Appropriate status should be a valid boolean value';
        }
        
        return null;
    },
};