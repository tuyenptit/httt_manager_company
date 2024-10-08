const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salaries = new Schema({
  employeeId: String,
  serviceId: String,
  salaryRate: Number, 
  calculatedSalary:	Number
  
}, {
  collection: 'salaries'
});

const salariesModel = mongoose.model('salaries', salaries);

module.exports = salariesModel;