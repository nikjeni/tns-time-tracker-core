const mongoose = require('mongoose');

const breakfastTimeSchema = mongoose.Schema({
    startTime: String,
    endTime: String,
    totalTime: String,
    created_at: {
        type: String,
        default: new Date().toLocaleString().split(',')[0]
    },
    type: String,
    user_id: String
});

module.exports.BreakfastTimeModel = mongoose.model('BreakfastTimeModel', breakfastTimeSchema);