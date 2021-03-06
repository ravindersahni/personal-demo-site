const billingRouter = require('express').Router();
const billingController = require('../../controllers/api/billing.controller');
const authguard = require('../../middleware/authguard');

billingRouter.use(authguard);
billingRouter.post('/stripe', billingController.chargeStripe);

module.exports = billingRouter;
