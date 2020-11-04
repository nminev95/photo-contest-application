import passport from 'passport';

const authMiddleware = passport.authenticate('jwt', { session: false });

const roleMiddleware = roleNameArray => {
    return (req, res, next) => {
        
        const role = roleNameArray.find(role => req.user && req.user.role === role);

        if (role) {
            next();
        } else {
            res.status(403).send({
                message: 'Resource is forbidden.',
            }); 
        }
    };
};

export {
    authMiddleware,
    roleMiddleware,
};
