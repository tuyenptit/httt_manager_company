const { Router } = require('express')

const {
    getListsalariesServices,
    createsalariesServices
} = require("../services/salaries")

const salariesRouter = Router()

salariesRouter.get('/list', getListsalariesServices)
salariesRouter.post('/create', createsalariesServices)

module.exports = salariesRouter
