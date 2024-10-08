const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const services = new Schema({
  serviceId: String,
  serviceName: String,
  serviceType: String,
  basePrice: Number
}, {
    collection: 'services'
});

const servicesModel = mongoose.model('services', services);

module.exports = servicesModel;