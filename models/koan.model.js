const mongoose = require('mongoose');

const KoanSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: Array,
		required: false
	},
	href: {
		type: String,
		required: false
	}
});

const KoanModel = mongoose.model('Koan', KoanSchema);
module.exports = KoanModel;
