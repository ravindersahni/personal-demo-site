const router = require('express').Router();
const billingRouter = require('./api/billing.router');
const koansRouter = require('./api/koans.router');

router.use('/billing', billingRouter);
router.use('/koans', koansRouter);

module.exports = router;
