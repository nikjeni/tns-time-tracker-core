const { StartTimeModel } = require('../model/starttime.model');
const { EndTimeModel } = require('../model/endtime.model');
const { BreakfastTimeModel } = require('../model/breakfasttime.model');

module.exports.saveStartTime = async (req, res, next) => {
    let startTime = new StartTimeModel(req.body);

    try {
        let result = await startTime.save();
        console.log("save start time result", result);
        res.status(200).send({ status: true, message: "Start time saved successfully", result: result });
    } catch (err) {
        console.log("save start time error", err);
        res.status(500).send("Unable to save start time");
    }
}

module.exports.saveEndTime = async (req, res, next) => {
    let endTime = new EndTimeModel(req.body);

    try {
        let result = await endTime.save();
        console.log("save end time result", result);
        res.status(200).send({ status: true, message: "End time saved successfully", result: result });
    } catch (err) {
        console.log("save end time error", err);
        res.status(500).send("Unable to save end time");
    }
}


module.exports.saveBreakfastTime = async (req, res, next) => {
    let breakfasttime = new BreakfastTimeModel(req.body);

    try {
        let result = await breakfasttime.save();
        console.log("save break time result", result);
        if (result) {
            return res.status(200).send({ status: true, message: "Saved break time successfully" });
        }
    } catch (err) {
        console.log("save break time error", err);
        return res.status(500).send("Unable to save breakfast time");
    }
}

module.exports.fetchTimeRecords = async (req, res, next) => {
    try {
        let result = await BreakfastTimeModel.find({ user_id: req.body.userId, created_at: req.body.created_at });
        console.log("fetch break time details result", result);
        return res.status(200).send({ status: true, message: "Fetched Successfully", result: result });
    } catch (err) {
        console.log("fetch break time details error", err);
        return res.status(500).send("Unable to fetch records");
    }
}

module.exports.fetchStartTime = async (req, res, next) => {
    try {
        let result = await StartTimeModel.find({ user_id: req.body.userId, created_at: req.body.created_at });
        console.log("fetch start time details result", result);
        return res.status(200).send({ status: true, message: "Fetched Successfully", result: result });
    } catch (err) {
        console.log("fetch start time details error", err);
        return res.status(500).send("Unable to fetch records");
    }
}


module.exports.fetchEndTime = async (req, res, next) => {
    try {
        let result = await EndTimeModel.find({ user_id: req.body.userId, created_at: req.body.created_at });
        console.log("fetch end time detailsc result", result);
        return res.status(200).send({ status: true, message: "Fetched Successfully", result: result });
    } catch (err) {
        console.log("fetch end time details error", err);
        return res.status(500).send("Unable to fetch records");
    }
}

