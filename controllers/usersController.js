const mongoose = require('mongoose')
const User = require('../models/userModel').User
const bcrypt = require('bcrypt')

const signup = async(req, res) => {
    try {

        const user = req.user
        await user.save()
        res.status(201).send({user,token:req.token})

    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }

}

const login = async(req, res) => {

    try {
        let user = await User.findOne({ "userName": req.body.userName })
        if (user == null) {
            throw "User doesn\'t exist"
        }
        else{
            this.user = req.user
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            throw 'Invalid username/password'
        }
        //console.log(req.user)
        await this.user.save()
        res.status(201).send({ userName: user.userName, status: "Successfully Logged In" ,token :req.token})

    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

const logout = async (req,res)=>{
  

    try {
        const user = req.user
        if(req.body !== null)
         {
             user.cart = req.body
         }
        user.tokens = user.tokens.filter(token=>req.token !== token.token)
        await user.save()
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(e)
    }
}

const logoutAll = async (req,res)=>{
  

    try {
        const user = req.user
         user.tokens =[]
         if(req.body !== null)
         {
             user.cart = req.body
         }
        await user.save()
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(e)
    }
}

const getUser = async(req, res) => {
    try {
        //let user = await User.findOne({ "userName": req.params.userName })
        res.status(200).send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }

}

const getUserCart = async(req, res) => {

    try {
        const user = req.user
        const cart = user.cart
        if (cart == null) {
            throw 'Your cart is empty'
        }
        res.status(200).send(cart)
    } catch (e) {
        res.status(500).send(e)
    }

}

const getUserOrders =async(req, res) => {

    try {
        const user = req.user
        const orders = user.orders
        if (orders == null) {
            throw 'Your have not ordered anything yet'
        }
        res.status(200).send(orders)
    } catch (e) {
        res.status(500).send(e)
    }
} 

const updateCart = async(req,res)=>{
const cart = req.body.cart
const user = req.user
console.log(cart)
}

const placeOrder = async (req,res)=>{
    const user = req.user
    const _id = new mongoose.Types.ObjectId()
    console.log(req.body)
    let cartt =req.body.cart
    const order={
        cart : cartt,
        _id,
        //this all will be calculated in frontend
        totalPrice  : req.body.totalPrice,
        orderDate : new Date().toString(),
        deliveryAddress : req.body.deliveryAddress.pin === null ? null :req.body.deliveryAddress , 
        status:"Processing"
    }
    
    try{
        if(req.body.cart.length !=0)
        {
            user.orders = user.orders.concat(order)
            if(!req.body.purchasing)
            user.cart=[]
        }
        else{
            throw 'Your cart is empty'
        }
        
        await user.save()
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(e)
    }
  
}

module.exports={
    signup,
    login,
    logout,
    logoutAll,
    getUser,
    getUserCart,
    getUserOrders,
    updateCart,
    placeOrder
}
