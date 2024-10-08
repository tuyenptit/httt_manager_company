const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const access_log = new Schema({
  employeeId: String,
  accessTime: Date,
  accessLocation: String,
  accessType: String
}, {
  collection: 'access_log'
});

const access_logModel = mongoose.model('access_log', access_log);

module.exports = access_logModel;