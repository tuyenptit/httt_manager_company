const { Router } = require('express')

const {
    getListbuilding_employeesServices,
    createbuilding_employeesServices
} = require("../services/building_employees")

const building_employeesRouter = Router()

building_employeesRouter.get('/list', getListbuilding_employeesServices)
building_employeesRouter.post('/create', createbuilding_employeesServices)

module.exports = building_employeesRouter
