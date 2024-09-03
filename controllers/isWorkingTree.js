const { exec } = require('child_process');
environments = require('../config/paths').env;

module.exports = (req, res, next) => {
    const env = req.query.env;

    const envFound = environments.find(e => e.name === env);
    
    const command = "cd " + envFound.path + " && git rev-parse --is-inside-work-tree";
    exec(command, (err, stdout, stderr) => {
        if (!stdout.includes('true')) {
            next(new Error('Git nao foi inicializado na pasta ' + envFound.path));
        }
        next();
    });
}
