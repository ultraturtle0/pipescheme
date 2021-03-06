const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: 'Accident'
    },
    filename: String,
    uploadDate: {
    	type: Date,
    	default: Date.now
    }
});

mongoose.model('Photo', PhotoSchema);
