const User = require('../models/userModel').User
const Product= require('../models/productModel')

const getAllUsers = async(req, res) => {
    try {
        const users = await User.find()
        res.status(200).send(users)

    } catch (e) {
        res.status(500).send({ error: e.errmsg ? e.errmsg : e })
    }

}

const addNewProduct = async(req, res) => {

    try {
        const product = new Product(req.body)
        await product.save()
        res.status(200).send(product)

    } catch (e) {
        res.status(400).send({ error: e.errmsg ? e.errmsg : e })
    }
}

module.exports={
    getAllUsers,
    addNewProduct
}