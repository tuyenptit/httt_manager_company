const { Router } = require('express')

const {
    getListCompaniesServices,
    createCompanyServices
} = require("../services/company")

const companyRouter = Router()

companyRouter.get('/list', getListCompaniesServices)
companyRouter.post('/create', createCompanyServices)

module.exports = companyRouter
