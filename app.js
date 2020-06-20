require('./db/mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const usersRoute = require('./router/usersRoute')
const productsRoute = require('./router/productsRoute')
const adminRoute = require('./router/adminRoute')
const apiRoute = require('./router/apiRoute')

app.use(express.json())
app.use(cors())
app.use(usersRoute)
app.use(productsRoute)
app.use(adminRoute)
app.use('/api',apiRoute)

module.exports=app

