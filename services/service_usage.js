const service_usageModel = require("../collections/service_usage")

async function getListservice_usageServices(req, res) {
    service_usageModel.find({})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log("ERROR: ", err);
        })

}

async function createservice_usageServices(req, res) {
    service_usageModel.create({
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
    getListservice_usageServices,
    createservice_usageServices,
}