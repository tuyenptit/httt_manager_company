const companyRouter = require("./company")

const routers = (app) => {
  app.use(function (req, res, next) {
    const now = new Date()
    console.log(req.path, ':', now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }))
    next()
  })

  app.use('/api/company', companyRouter)


  app.use('/', (req, res) => {
    return res.send(`
      <h1>Server: ON</h1>
      <h2>Path not found</h2>
    `)
  })
}

module.exports = routers
