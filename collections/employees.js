const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employees = new Schema({
  employeeId: String,
  companyId: String,
  fullName: String,
  idCard: String,
  birthDate: Date,
  phone: String
}, {
  collection: 'employees'
});

const employeesModel = mongoose.model('employees', employees);

module.exports = employeesModel;