const salariesModel = require("../collections/salaries")

async function getListsalariesServices(req, res) {
    salariesModel.find({})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log("ERROR: ", err);
        })

}

async function createsalariesServices(req, res) {
    salariesModel.create({
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
    getListsalariesServices,
    createsalariesServices,
}