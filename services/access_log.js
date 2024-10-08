const access_logModel = require("../collections/access_log")

async function getListaccess_logServices(req, res) {
    access_logModel.find({})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log("ERROR: ", err);
        })

}

async function createaccess_logServices(req, res) {
    access_logModel.create({
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
    getListaccess_logServices,
    createaccess_logServices,
}