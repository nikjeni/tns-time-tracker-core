const { StartTimeModel } = require('../model/starttime.model');
const { EndTimeModel } = require('../model/endtime.model');
const { BreakfastTimeModel } = require('../model/breakfasttime.model');
const { lunchTimeModel } = require('../model/lunchtime.model');
const { shortTimeModel } = require('../model/shorttime.model');


module.exports.saveStartTime = async (req, res, next) => {
    let startTime = new StartTimeModel(req.body);

    try {
        let result = await startTime.save();
        res.status(200).send({ status: true, message: "Start time saved successfully", result: result });
    } catch (err) {
        res.status(500).send("Unable to save start time");
    }
}

module.exports.saveEndTime = async (req, res, next) => {
    let endTime = new EndTimeModel(req.body);

    try {
        let result = await endTime.save();
        res.status(200).send({ status: true, message: "End time saved successfully", result: result });
    } catch (err) {
        res.status(500).send("Unable to save end time");
    }
}


module.exports.saveBreakfastTime = async (req, res, next) => {
    let breakfasttime = new BreakfastTimeModel(req.body);

    try {
        let result = await breakfasttime.save();
        if (result) {
            return res.status(200).send({ status: true, message: "Saved break time successfully" });
        }
    } catch (err) {
        return res.status(500).send("Unable to save breakfast time");
    }
}

module.exports.fetchTimeRecords = async (req, res, next) => {
    try {
        let result = await BreakfastTimeModel.find({ user_id: req.body.userId, created_at: req.body.created_at });
        return res.status(200).send({ status: true, message: "Fetched Successfully", result: result });
    } catch (err) {
        console.log(err);
        return res.status(500).send("Unable to fetch records");
    }
}

module.exports.fetchStartTime = async (req, res, next) => {
    try {
        let result = await StartTimeModel.find({ user_id: req.body.userId, created_at: req.body.created_at });
        return res.status(200).send({ status: true, message: "Fetched Successfully", result: result });
    } catch (err) {
        console.log(err);
        return res.status(500).send("Unable to fetch records");
    }
}


module.exports.fetchEndTime = async (req, res, next) => {
    try {
        let result = await EndTimeModel.find({ user_id: req.body.userId, created_at: req.body.created_at });
        return res.status(200).send({ status: true, message: "Fetched Successfully", result: result });
    } catch (err) {
        console.log(err);
        return res.status(500).send("Unable to fetch records");
    }
}

module.exports.saveShortTime = async (req, res, next) => {
    let shorttime = new shortTimeModel(req.body);

    try {
        await shorttime.save();
    } catch (err) {
        res.status(500).send("Unable to save short time");
    }
}

