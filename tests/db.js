const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const {User} = require('../models/userModel')
const Product = require('../models/productModel')

const setupDbUser = async()=>{
    await User.deleteMany()
}

const setupDbProduct = async()=>{
    await Product.deleteMany()
    await new Product(productOne).save()
}

const setupDbAdmin = async()=>{
    await User.deleteMany()
    await new User(userOne).save()
}

const userOne = {
    "name": {
        "firstName": "Sanket",
        "middleName": "Vasant",
        "lastName": "Farande"
    },

    "userName": "sanketvf",
    "password": "sanket123",
    "email": "sanket@gmail.com",
    "address": {
        "houseNo": "A-290",
        "city": "Pimpri",
        "pin": 411018
    }
    
}

const productOne ={

    "name": "Banana",
    "currentPrice": 40,
    "category": "Fruits",
    "availableStatus": false,
    "purchasedDate": "07-04-2019",
    "daysToExpire": 3,
    "availableQuantities": 0
}

const productTwo ={

    "name": "Apple",
    "currentPrice": 80,
    "category": "Fruits",
    "availableStatus": true,
    "purchasedDate": "07-02-2019",
    "daysToExpire": 3,
    "availableQuantities": 40
}
module.exports ={
    userOne,
    productOne,
    productTwo,
    setupDbProduct,
    setupDbAdmin,
    setupDbUser
}