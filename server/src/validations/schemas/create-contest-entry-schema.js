export const createContestEntrySchema = {
    title: value => {
        if (!value) {
            return 'Title is required';
        }
        
        if (typeof value !== 'string' || value.trim().length < 4 || value.trim().length > 25) {
            return 'Title should be a string in range [4..25]';
        }

        return null;
    },
    description: value => {
        if (!value) {
            return 'Description is required';
        }
        
        if (typeof value !== 'string' || value.trim().length < 20 || value.trim().length > 240) {
            return 'Description should be a string in range [20..240]';
        }

        return null;
    },
    filename: value => {
        if (!value) {
            return 'Photo upload is required';
        }
        
        return null;
    },
};