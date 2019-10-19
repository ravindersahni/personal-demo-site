const router = require('express').Router();
const billingRouter = require('./api/billing.router');
const koansRouter = require('./api/koans.router');
const userRouter = require('./api/user.router');

router.use('/billing', billingRouter);
router.use('/koans', koansRouter);
router.use('/user', userRouter);

module.exports = router;
