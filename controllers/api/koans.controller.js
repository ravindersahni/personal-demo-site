const KoanModel = require('../../models/koan.model');

exports.createKoan = async (req, res, next) => {
	try {
		const model = await KoanModel.create(req.body);
		res.status(201).json(model);
	} catch (error) {
		error.statusCode = 422;
		next(error);
	}
};

exports.loadKoans = async (req, res, next) => {
	console.log('loadKoans was called');
	try {
		const models = [];
		for (let koan of req.body) {
			models.push(await KoanModel.create(koan));
		}
		res.status(201).json(models);
	} catch (error) {
		error.statusCode = 422;
		next(error);
	}
};

exports.getKoanPreviews = async (req, res, next) => {
	try {
		const koans = await KoanModel.find({}, [ 'title', '_id' ]);
		res.status(200).json(koans);
	} catch (error) {
		error.statusCode = 500;
		next(error);
	}
};

exports.getKoans = async (req, res, next) => {
	try {
		const koans = await KoanModel.find({});
		res.status(200).json(koans);
	} catch (error) {
		error.statusCode = 500;
		next(error);
	}
};

exports.getKoanById = async (req, res, next) => {
	try {
		const koan = await KoanModel.findById(req.params.id);
		if (!koan) {
			const error = new Error('Item does not exist');
			error.statusCode = 404;
			throw error;
		}
		res.status(200).json(koan);
	} catch (error) {
		next(error);
	}
};

exports.updateKoan = async (req, res, next) => {
	try {
		const updated = await KoanModel.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			useFindAndModify: false
		});
		if (updated === null) {
			const error = new Error('Item does not exist');
			error.statusCode = 404;
			throw error;
		}
		res.status(200).json(updated);
	} catch (error) {
		next(error);
	}
};

exports.deleteKoan = async (req, res, next) => {
	try {
		const deleted = await KoanModel.findByIdAndDelete(req.params.id);
		if (!deleted) {
			const error = new Error('Item does not exist');
			error.statusCode = 404;
			throw error;
		}
		res.status(200).json(deleted);
	} catch (error) {
		next(error);
	}
};
