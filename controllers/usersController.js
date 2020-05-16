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
        res.status(500).send({ error: e.errmsg ? e.errmsg : e })
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
        res.status(400).send({ error: e.errmsg ? e.errmsg : e })
    }
}

const logout = async (req,res)=>{
  

    try {
        const user = req.user
        user.tokens = user.tokens.filter(token=>req.token !== token.token)
        await user.save()
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send({ error: e.errmsg ? e.errmsg : e })
    }
}

const logoutAll = async (req,res)=>{
  

    try {
        const user = req.user
         user.tokens =[]
        await user.save()
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send({ error: e.errmsg ? e.errmsg : e })
    }
}

const getUser = async(req, res) => {
    try {
        //let user = await User.findOne({ "userName": req.params.userName })
        res.status(200).send(req.user)
    } catch (e) {
        res.status(400).send({ error: e.errmsg ? e.errmsg : e })
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
        res.status(500).send({ error: e.errmsg ? e.errmsg : e })
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
        res.status(500).send({ error: e.errmsg ? e.errmsg : e })
    }
} 

const placeOrder = async (req,res)=>{
    const user = req.user
    const cart = user.cart
    const _id = new mongoose.Types.ObjectId()
    const order={
        cart,
        _id,
        //this all will be calculated in frontend
        totalPrice  : 300,
        orderDate : new Date().toString(),
        status:"Processing"
    }

    try{
        if(cart.length !=0)
        {
            user.orders = user.orders.concat(order)
            user.cart=[]
        }
        else{
            throw 'Your cart is empty'
        }
        
        await user.save()
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send({ error: e.errmsg ? e.errmsg : e })
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
    placeOrder
}
