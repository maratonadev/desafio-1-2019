const express = require('express');
const router = express.Router();
const assistant_controller = require('../controllers/assistant.controller');

router.post("/message", assistant_controller.message);
router.post("/changeWorkspace", assistant_controller.change_workspace);

module.exports = router;
