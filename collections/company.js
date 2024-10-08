const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const company = new Schema({
  companyId: String,
  companyName: String,
  taxId: String,
  charterCapital: Number,
  fieldOfActivity: String,
  numberOfEmployees: Number,
  officeAddress: String,
  officeArea: Number,
  phone: String
}, {
  collection: 'companies'
});

const CompanyModel = mongoose.model('companies', company);

module.exports = CompanyModel;