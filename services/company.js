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
        item: req.body.item
    })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log("ERROR: ", err);
        })
}

async function deleteCompanyServices(req, res) {
    const id = req.params.id;
    CompanyModel.deleteOne({
        _id: id
    })
        .then(() => {
            res.status(200).json("Delete success");
        })
        .catch(err => {
            onsole.log("ERROR: ", err);
        })

}

module.exports = {
    getListCompaniesServices,
    createCompanyServices,
    deleteCompanyServices
}