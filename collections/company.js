const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const company = new Schema({
  item: String,
}, {
  collection: 'companies'
});

const CompanyModel = mongoose.model('companies', company);

module.exports = CompanyModel;