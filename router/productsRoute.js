const express = require('express')
const router = new express.Router()
const {getAllProducts,getCategoryProducts} = require('../controllers/productsController')
//retrive all products
router.get('',getAllProducts )

//retrieve based on category
router.get('/:category',getCategoryProducts )

module.exports = router