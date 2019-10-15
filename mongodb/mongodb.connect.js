const mongoose = require('mongoose');

exports.connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			auth: { authdb: 'admin' }
		});
	} catch (error) {
		console.error(`error connectiong to mongodb: ${error}`);
	}
};
