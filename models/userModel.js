const mongoose = require('mongoose')
const validator = require('validator')

var cartSchema = new mongoose.Schema({
    product: { type: String },
    quantity: { type: Number },
    currentPrice: { type: Number },
})

var address = new mongoose.Schema({
    houseNo: { type: String, required: true },
    city: { type: String, required: true },
    pin: { type: Number, required: true },
})

var orderSchema = new mongoose.Schema({
    cart: [cartSchema],
    totalPrice: { type: Number },
    orderDate: { type: String },
    deliveryAddress: address,
    status: { type: String },
    deliveryDate: String,
})

const userSchema = new mongoose.Schema({
    name: {
        //type: Object,
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
            required: true
        },
        lastName: String

    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot be password')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email')
            }
        }
    },
    cart: [cartSchema],
    address,
    orders: [orderSchema],
    tokens : [{
        token:{
            type:String,
            required:true
        }
    }]
})

userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    return userObject
}

const User = new mongoose.model('User', userSchema)
const Cart = new mongoose.model('Cart', cartSchema)
const Order = new mongoose.model('Order', orderSchema)

module.exports = {
    User,
    Order,
    Cart
}