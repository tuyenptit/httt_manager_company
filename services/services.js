const servicesModel = require("../collections/services")

async function getListservicesServices(req, res) {
    servicesModel.find({})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log("ERROR: ", err);
        })

}

async function createservicesServices(req, res) {
    servicesModel.create({
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
    getListservicesServices,
    createservicesServices,
}