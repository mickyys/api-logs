const express = require("express");
const { validLogsSchemaMiddleware } = require("../middlewares/valid-logs-schema-middleware");
const router = express.Router();
const logsController = require("./../controllers/logsController");

router.post("/log", [validLogsSchemaMiddleware], logsController.addLog);

module.exports = router;