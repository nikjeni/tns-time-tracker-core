const express = require('express');
const router = express.Router();
const timeController = require('../controller/time.controller');

// time controller
router.post('/startTime', timeController.saveStartTime);
router.post('/endTime', timeController.saveEndTime);
router.post('/breakTime', timeController.saveBreakfastTime);

router.post('/fetchDetails', timeController.fetchTimeRecords);
router.post('/inTime', timeController.fetchStartTime);
router.post('/finalTime', timeController.fetchEndTime);

module.exports.timeRoutes = router;