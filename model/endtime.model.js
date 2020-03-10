const mongoose = require('mongoose');

const endTimeSchema = mongoose.Schema({
    startTime: String,
    created_at: {
        type: String,
        default: new Date().toLocaleString().split(',')[0],
    },
    user_id: String
});

module.exports.EndTimeModel = mongoose.model('EndTimeModel', endTimeSchema);