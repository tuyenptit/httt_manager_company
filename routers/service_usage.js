const { Router } = require('express')

const {
    getListservice_usageServices,
    createservice_usageServices
} = require("../services/service_usage")

const service_usageRouter = Router()

service_usageRouter.get('/list', getListservice_usageServices)
service_usageRouter.post('/create', createservice_usageServices)

module.exports = service_usageRouter
