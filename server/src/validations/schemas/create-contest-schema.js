export const createContestSchema = {
    title: value => {
        if (!value) {
            return 'Title is required';
        }
        
        if (typeof value !== 'string' || value.trim().length < 4 || value.trim().length > 30) {
            return 'Title should be a string in range [4..30]';
        }

        return null;
    },
    category: value => {
        if (!value) {
            return 'Category is required';
        }
        
        if (typeof value !== 'string' || value.trim().length < 6 || value.trim().length > 200) {
            return 'Category should be a string in range [6..200]';
        }

        return null;
    },
    firstPhaseLimit: value => {
        if (!value) {
            return 'First phase limit is required';
        }

        if (typeof value !== 'number' || isNaN(value) || value < 1 || value > 31) {
            return 'First phase limit must be a valid integer in the range of [1..31]';
        }

        return null;
    },
    secondPhaseLimit: value => {
        if (!value) {
            return 'Second phase limit is required';
        }
        
        if (typeof value !== 'number' || isNaN(value) || value < 1 || value > 24) {
            return 'Second phase limit must be a valid integer in the range of [1..24]';
        }

        return null;
    },
    restrictions: value => {
        if (!value) {
            return 'Contest restrictions are required';
        }

        if (typeof vlaue !== 'string' || value !== 'Open' || value !== 'Invitations only') {
            return 'Contest restrictions are either Open or Invitations only';
        }
        
        return null;
    },
    spots: value => {
        if (!value) {
            return 'Spots limit is required';
        }

        if (typeof value !== 'number' || isNaN(value) || value < 25 || value > 100) {
            return 'Contest limit must be a valid integer between [25, 50, 75, 100]';
        }

        return null;
    },
    filename: value => {
        if (!value) {
            return 'Contest cover image is required';
        }
    },

};
