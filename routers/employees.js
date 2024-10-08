const { Router } = require('express')

const {
    getListemployeesServices,
    createemployeesServices
} = require("../services/employees")

const employeesRouter = Router()

employeesRouter.get('/list', getListemployeesServices)
employeesRouter.post('/create', createemployeesServices)

module.exports = employeesRouter
