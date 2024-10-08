const employeesModel = require("../collections/employees")

async function getListemployeesServices(req, res) {
    employeesModel.find({})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log("ERROR: ", err);
        })

}

async function createemployeesServices(req, res) {
    employeesModel.create({
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
    getListemployeesServices,
    createemployeesServices,
}