const express = require('express')
const router = new express.Router()
const usersRoute = require('./usersRoute')
const productsRoute =  require('./productsRoute')
const adminRoute = require('./adminRoute')

router.use('/products',productsRoute)
router.use('/users',usersRoute)
router.use('/admin',adminRoute)



module.exports=router