const companyRouter = require("./company");
const employeesRouter = require("./employees");
const servicesRouter = require("./services");
const building_employeesRouter = require("./building_employees");
const service_usageRouter = require("./service_usage");
const access_logRouter = require("./access_log");
const salariesRouter = require("./salaries");

const routers = (app) => {
  app.use(function (req, res, next) {
    const now = new Date();
    console.log(req.path, ':', now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
    next();
  });

  app.use('/api/company', companyRouter); 
  app.use('/api/employees', employeesRouter); 
  app.use('/api/services', servicesRouter);
  app.use('/api/building_employees', building_employeesRouter);
  app.use('/api/service_usage', service_usageRouter);
  app.use('/api/access_log', access_logRouter);
  app.use('/api/salaries', salariesRouter);

  app.use('/', (req, res) => {
    return res.send(`
      <h1>Server: ON</h1>
      <h2>Path not found</h2>
    `);
  });
}

module.exports = routers;