const { Router } = require('express')

const {
    getListservicesServices,
    createservicesServices
} = require("../services/services")

const servicesRouter = Router()

servicesRouter.get('/list', getListservicesServices)
servicesRouter.post('/create', createservicesServices)

module.exports = servicesRouter
