const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const services = new Schema({
  bul_employeeId: String,
  fullName: String,
  birthDate: Date,
  address: String,
  phone: Number,
  position: String,
  salaryBase: Number,
  serviceId: String,
}, {
  collection: 'building_employees'
});

const building_employeesModel = mongoose.model('building_employees', services);

module.exports = building_employeesModel;