const express = require('express')
const router = new express.Router()
const generateToken = require('../middleware/generateToken')
const hash = require('../middleware/hashPassword')
const auth = require('../middleware/authorizeUser')
const {signup,login,logout,logoutAll,getUser,getUserCart,getUserOrders,placeOrder} = require('../controllers/usersController')

//signup
router.post('/signup',hash,generateToken,signup)

//login
router.post('/login',generateToken,login )

//logout
router.post('/logout',auth,logout)

//logout from all devices
router.post('/logoutAll',auth,logoutAll)

//retrive particular user 
router.get('/me', auth,getUser)

//retrieve cart of user
router.get('/me/cart',auth, getUserCart)

//retrieve order of user
router.get('/me/orders', auth,getUserOrders)

//place order from exisiting cart
router.post('/me/placeorder',auth,placeOrder)

module.exports = router