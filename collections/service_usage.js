const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const service_usage = new Schema({
  companyId: String,
  serviceId: String,
  registrationDate: Date,
  priceMultiplier: Number,
  serviceFee: Number,
  isMandatory: String,
  daysUsed: Number,
  monthlyFee: Number
  
  
}, {
  collection: 'service_usage'
});

const service_usageModel = mongoose.model('service_usage',service_usage);

module.exports = service_usageModel;