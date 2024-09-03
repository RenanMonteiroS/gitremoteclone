environments = require('../config/paths').env;

module.exports = (req, res, next) => {
    const env = req.query.env;

    const envFound = environments.find(e => e.name === env);
    if(!envFound) {
        next(new Error('Ambiente não existe'));
    }
    next();
} 