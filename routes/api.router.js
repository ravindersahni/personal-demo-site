const router = require('express').Router();
const billingRouter = require('./api/billing.router');
const koansRouter = require('./api/koans.router');
const userRouter = require('./api/user.router');
const weatherRouter = require('./api/weather.router');

router.use('/billing', billingRouter);
router.use('/koans', koansRouter);
router.use('/user', userRouter);
router.use('/weather', weatherRouter);

module.exports = router;
