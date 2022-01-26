const { config } = require('../config');
const LogsSchema = require('./../schemas/logsSchema');

class LogsController {
    async addLog(req, res, next) {
      try {
        const { body } = req;
        const logsSchema = new LogsSchema(body);
        const result = await logsSchema.save();
        res.send({
          status: "logs added successful",
          result
        });
      } catch (error) {
        next(error);
      }
    }
}

module.exports = new LogsController();

