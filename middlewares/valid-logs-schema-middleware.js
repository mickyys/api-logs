const schema  = require("../models/logsModel");

module.exports.validLogsSchemaMiddleware = async (req, res, next) => {
    try {
      await schema.validateAsync(req.body); 
      next();
    } catch (error) {
      next(error);
    }
  };
  