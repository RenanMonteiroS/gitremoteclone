const { exec } = require("child_process");

module.exports = (req, res, next) => {
    exec('ssh -T git@localhost', (err, stdout, stderr) => {
        if(!stdout.split(" ").includes("Welcome")) {
            console.log('Não autenticado via SSH');
            next(new Error('Não autenticado via SSH'));
        }
        next();
    });
}