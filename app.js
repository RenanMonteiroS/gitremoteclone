
const express = require("express");

const app = express();

const gitRoutes = require('./routes/gitService');
const notFoundController = require('./controllers/404');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(gitRoutes);
app.use('/', notFoundController);
app.use((err, req, res, next) => {
    res.status(500).render('500', {
        pageTitle: 'Error',
        error: err
    });
})

app.listen(3000);