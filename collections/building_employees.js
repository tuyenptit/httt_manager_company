const mongoose = require('mongoose');
const building_employeesRouter = require('../routers/building_employees');

const Schema = mongoose.Schema;

const services = new Schema({
  bul_employeeId: String,
  fullName: String,
  birthDate: Date,
  address: String,
  phone: Number,
  position: String
  
}, {
  collection: 'building_employees'
});

const building_employeesModel = mongoose.model('building_employees',building_employeesRouter);

module.exports = building_employeesModel;