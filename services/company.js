const CompanyModel = require("../collections/company")
const service_usageModel = require("../collections/service_usage")
const servicesModel = require("../collections/services")

async function getListCompaniesServices(req, res) {
    CompanyModel.find({})
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log("ERROR: ", err);
        })

}

async function createCompanyServices(req, res) {
    CompanyModel.create({
        ...req.body
    })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log("ERROR: ", err);
        })
}

// Lấy giá dịch vụ
async function getServicesCompanyServices(req, res) {
    const companyId = req.params.id;
    const company = await CompanyModel.findOne({
        companyId: companyId
    })

    const listServices = await service_usageModel.find({
        companyId: companyId,
    })

    const listQuery = []
    listServices.forEach(async (s) => {
        listQuery.push(servicesModel.findOne({
            serviceId: s.serviceId
        }))
    })

    const arrPrice =  await Promise.all(listQuery)

    const sumPrice = arrPrice.reduce((c, s, index) => {
        const now = new Date()
        const dateRes = new Date(listServices[index].registrationDate)
        const diff = Math.abs(now - dateRes);


        return c + ((s.basePrice / 30) * (diff / 86400000))
    }, 0)

    let priceOfficeSrise = 0
    let priceEmployeeSrise = 0
    if(company.officeArea > 100) {
        priceOfficeSrise = (sumPrice * (parseInt((company.officeArea - 100) / 10)) * 0.05)
    }
    if(company.numberOfEmployees > 10) {
        priceEmployeeSrise = (sumPrice * (parseInt((company.numberOfEmployees - 10) / 5)) * 0.05)
    }

    return res.status(200).json({
        base: sumPrice.toFixed(2),
        priceOfficeSrise: priceOfficeSrise.toFixed(2),
        priceEmployeeSrise: priceEmployeeSrise.toFixed(2),
        sumPrice: (sumPrice + priceOfficeSrise + priceEmployeeSrise).toFixed(2)
    })
}

module.exports = {
    getListCompaniesServices,
    createCompanyServices,
    getServicesCompanyServices
}