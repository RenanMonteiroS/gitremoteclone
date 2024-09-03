express = require('express');

router = express.Router();

const isAuth = require('../controllers/isAuth');
const isWorkingTree = require('../controllers/isWorkingTree');
const envExists = require('../controllers/envExists');
const gitController = require('../controllers/gitService');

router.get('/gitservices/gitpull', isAuth, envExists, isWorkingTree, gitController.gitPull);

module.exports = router;