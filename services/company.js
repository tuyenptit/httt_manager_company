const CompanyModel = require("../collections/company")

async function getListCompaniesServices(req, res) {
    CompanyModel.find({})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log("ERROR: ", err);
        })

}

async function createCompanyServices(req, res) {
    CompanyModel.create({
        ...req.body
    })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log("ERROR: ", err);
        })
}

module.exports = {
    getListCompaniesServices,
    createCompanyServices,
}