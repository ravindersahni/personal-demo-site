const mongoose = require('mongoose');
const User = require('../../models/user.model');

exports.getUnlockedKoans = (req, res) => {};

exports.addUnlockedKoan = async (req, res, next) => {
	const { user } = req;
	const { koan_id } = req.body;

	if (!(user && user._id && koan_id)) {
		const err = new Error();
		err.message = 'This method requires a user and a koan id';
		err.statusCode = 400;
		return next(err);
	}

	try {
		const updatedUser = await User.findByIdAndUpdate(
			user._id,
			{
				$push: { unlockedKoans: mongoose.Types.ObjectId(koan_id) }
			},
			{ new: true }
		);
		res.json(updatedUser);
	} catch (error) {
		next(error);
	}
};

exports.getFavoriteKoans = (req, res) => {};

exports.addKoanToFavorites = (req, res) => {};

exports.removeKoanFromFavorites = (req, res) => {};
