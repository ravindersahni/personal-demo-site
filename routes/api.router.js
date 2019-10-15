const apiRouter = require('express').Router();
const apiController = require('../controllers/api.controller');

apiRouter.get('/logout', apiController.performLogout);
apiRouter.get('/current-user', apiController.getCurrentUser);

module.exports = apiRouter;
