const building_employeesModel = require("../collections/building_employees")
const service_usageModel = require("../collections/service_usage")
const CompanyModel = require("../collections/company")
const servicesModel = require("../collections/services")

async function getListbuilding_employeesServices(req, res) {
    building_employeesModel.find({})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log("ERROR: ", err);
        })

}

async function createbuilding_employeesServices(req, res) {
    building_employeesModel.create({
        ...req.body
    })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log("ERROR: ", err);
        })
}

async function getSalaryEmployeesServices(req, res) {
    const employeeId = req.params.id;

    const employee = await building_employeesModel.findOne({
        bul_employeeId: employeeId
    })

    const positionId =  JSON.parse(JSON.stringify(employee)).positionId

    const serviceDetail = await servicesModel.findOne({
        serviceId: positionId
    })
    const serviceUse = await service_usageModel.find({
        serviceId: positionId
    })

    const calt = async (e) => {
        let sumPriceService = 0;
        const now = new Date()
        const dateRes = new Date(e.registrationDate)
        const diff = Math.abs(now - dateRes);
        const basePrice = (serviceDetail.basePrice / 30) * (diff / 86400000)

        const company = await CompanyModel.findOne({
            companyId: e.companyId
        })

        let priceOfficeSrise = 0
        let priceEmployeeSrise = 0
        if (company?.officeArea > 100) {
            priceOfficeSrise = (basePrice * (parseInt((company.officeArea - 100) / 10)) * 0.05)
        }
        if (company?.numberOfEmployees > 10) {
            priceEmployeeSrise = (basePrice * (parseInt((company.numberOfEmployees - 10) / 5)) * 0.05)
        }

        sumPriceService += basePrice + priceOfficeSrise + priceEmployeeSrise

        return sumPriceService
    }

    const sumPriceQuery = []
    serviceUse.forEach((e) => {
        const f = async () => calt(e)
        sumPriceQuery.push(f())
    })

    const resSum = await Promise.all(sumPriceQuery)
    const hoaHongLuowng = resSum.reduce((s, c) => {
        return s + c
    }, 0)

    const salaryBase =  JSON.parse(JSON.stringify(serviceDetail)).salaryBase
    return res.status(200).json({
        base: salaryBase?.toFixed(2),
        hoaHongLuowng: (hoaHongLuowng * 0.05).toFixed(2),
        sum: (salaryBase + hoaHongLuowng  * 0.05).toFixed(2)
    })
}

module.exports = {
    getListbuilding_employeesServices,
    createbuilding_employeesServices,
    getSalaryEmployeesServices
}