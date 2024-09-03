environments = require('../config/paths').env;
const { exec } = require("child_process");

exports.gitPull = (req, res, next) => {
    const env = req.query.env;

    const envExists = environments.find(e => env === e.name);
    let command = "cd " + envExists.path + " && git pull origin main";
    exec(command, (err, stdout, stderr) => {
        if(err) {
            next(new Error (err));
        }
        res.status(200).render('success', {
            pageTitle: 'Success',
            result: stdout
        });
    });  
};
