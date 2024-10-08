const { Router } = require('express')

const {
    getListaccess_logServices,
    createaccess_logServices
} = require("../services/access_log")

const access_logRouter = Router()

access_logRouter.get('/list', getListaccess_logServices)
access_logRouter.post('/create', createaccess_logServices)

module.exports = access_logRouter
