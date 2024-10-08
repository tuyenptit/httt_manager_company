const building_employeesModel = require("../collections/building_employees")

async function getListbuilding_employeesServices(req, res) {
    building_employeesModel.find({})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log("ERROR: ", err);
        })

}

async function createbuilding_employeesServices(req, res) {
    building_employeesModel.create({
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
    getListbuilding_employeesServices,
    createbuilding_employeesServices,
}