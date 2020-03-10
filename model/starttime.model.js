const mongoose = require('mongoose');

const startTimeSchema = mongoose.Schema({
    startTime: String,
    created_at: {
        type: String,
        default: new Date().toLocaleString().split(',')[0],
    },
    user_id: String
});

module.exports.StartTimeModel = mongoose.model('StartTimeModel', startTimeSchema);