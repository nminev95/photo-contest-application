export const createValidator = schema => {
    return (req, res, next) => {
        const body = req.body;
        const file = req.file;
        const bodyKeys = Object.keys(body);
        const validations = Object.keys(schema);

        if (bodyKeys.length > validations.length) {
            res.status(400).send({ message: 'You have entered more properties than needed!' });
        }

        const fails = validations
            .map((v) => v === 'filename' ? schema[v](file[v]) : schema[v](body[v]))
            .filter(e => e !== null);

        if (fails.length > 0) {
            res.status(400).send(fails);
        } else {
            next();
        }
    };
};
