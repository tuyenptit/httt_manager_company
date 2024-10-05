const express = require('express')
const bodyParser = require('body-parser')
const { connectDb } = require("./database/connectDb")
const routers = require("./routers/index")
const cors = require('cors')

const app = express()
const port = 3001

connectDb()
    .then(() => console.log("Connect database SUCCESS"))
    .catch(err => console.log("Connect database ERROR: ", err));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH']
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routers(app)

// app.get('/', (req, res) => 
//   {
//     ListModel.find({})
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//   }
// )

// app.post('/', (req, res) => 
//   {
//     ListModel.create({
//       item: req.body.item
//     })
//     .then(data => {
//       res.json(data)
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }
// )

// app.delete('/:id', (req, res) => 
//   {
//     const id = req.params.id;
//     ListModel.deleteOne({
//       _id: id
//     })
//     .then(() => {
//       res.status(200).json("ok");
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }
// )

// app.put('/:id', (req, res) => 
//   {
//     const id = req.params.id;
//     ListModel.updateOne({
//       _id: id
//     }, {
//       item: req.body.item
//     })
//     .then(data => {
//       res.json({item: req.body.item});
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }
// )


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
