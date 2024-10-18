const { Router } = require('express')

const {
    getListCompaniesServices,
    createCompanyServices,
    getServicesCompanyServices
} = require("../services/company")

const companyRouter = Router()

companyRouter.get('/list', getListCompaniesServices)
companyRouter.post('/create', createCompanyServices)
companyRouter.get('/services_company/:id', getServicesCompanyServices)


module.exports = companyRouter
