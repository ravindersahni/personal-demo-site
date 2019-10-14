const billingRouter = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = billingRouter
	.use(require('../middleware/authguard'))
	.post('/stripe', async (req, res, next) => {
		try {
			const charge = await stripe.charges.create({
				amount: 500,
				currency: 'usd',
				description: 'stripe demo payment',
				source: req.body.id
			});
			req.user.credits += 5;
			const updatedUser = await req.user.save();
			return res.json(updatedUser);
		} catch (err) {
			next(err);
		}
		res.send(req.user);
	});
