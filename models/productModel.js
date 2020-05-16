const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    currentPrice: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    availableStatus: {
        type: String,
        required: true
    },
    expiryDate: String,
    purchasedDate: {
        type: String,
        required: true
    },
    daysToExpire: Number,
    availableQuantities: {
        type: Number,
        required: true
    }
})

const Product = new mongoose.model('Product', productSchema)
module.exports = Product