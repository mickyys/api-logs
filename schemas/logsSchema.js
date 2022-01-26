const mongoose = require('mongoose');
const { application, types } = require('../types/types');
const { Schema } = mongoose;

const logsSchema = new Schema({
  application: {
    type: String,
    required: true,
    enum: application
  },
  type: {
    type: String,
    required: true,
    enum: types
  },
  message: {
    type: String,
    required: true
  },
  option: { 
    user: String, 
    phone: String,
    version: String,
    ip: String,
    os: String,
    geolocation: {
      latitude: String,
      longitude: String
    },
    other: String
  },
 
});

const model = mongoose.model('Logs', logsSchema);

module.exports = model