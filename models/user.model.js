const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	credits: { type: Number, default: 0 },
	favoritedKoans: [ { type: mongoose.SchemaTypes.ObjectId, ref: 'Koan' } ],
	unlockedKoans: [ { type: mongoose.SchemaTypes.ObjectId, ref: 'Koan' } ]
});

mongoose.model('User', userSchema);
