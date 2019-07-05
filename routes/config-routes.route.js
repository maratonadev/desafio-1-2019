const express = require('express');
const router = express.Router();
const config_controller = require('../controllers/config.controller');

router.post("/config", config_controller.credentials)


module.exports = router;
