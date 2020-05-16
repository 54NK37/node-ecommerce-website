const express = require('express')
const router = new express.Router()
const {getAllUsers,addNewProduct} = require('../controllers/adminController')

//retrieve all users
router.get('/getusers', getAllUsers)

//add new product 
router.post('/addproducts',addNewProduct )

module.exports = router