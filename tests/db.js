const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const {User} = require('../models/userModel')
const Product = require('../models/productModel')

const setupDbUser = async()=>{
    await User.deleteMany()
    await new User(userOne).save()
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
    "cart": [{
        "product": "Bread",
        "quantity": 2,
        "price": 30
    },
    {
        "product": "Apples",
        "quantity": 3,
        "price": 80
    }
],
"address": {
    "houseNo": "A-290",
    "city": "Pimpri",
    "pin": 411018
},
"orders": [{
        "cart": [{
                "product": "Onion",
                "quantity": 2,
                "price": 30
            },
            {
                "product": "Masala",
                "quantity": 1,
                "price": 60
            }
        ],
        "totalPrice": 120,
        "orderDate": "20-03-2018",
        "status": "Delivered",
        "deliveryDate": "23=03-2018"
    },
    {
        "cart": [{
                "product": "Apple",
                "quantity": 2,
                "price": 80
            },
            {
                "product": "Cucumber",
                "quantity": 3,
                "price": 20
            }
        ],
        "totalPrice": 220,
        "orderDate": "15-07-2019",
        "status": "Dispatched"

    }
],
    tokens:[{
        token : jwt.sign({userName :"sanketvf"},process.env.JWT_SECRET)
    }]
    
}

const userTwo = 
{
    "name": {
        "firstName": "Satyam",
        "middleName": "R",
        "lastName": "Falke"
    },

    "userName": "satyamrf",
    "password": "satyam123",
    "email": "satyam@gmail.com",
    "address": {
        "houseNo": "B-90",
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
    userTwo,
    productOne,
    productTwo,
    setupDbProduct,
    setupDbAdmin,
    setupDbUser
}