const Product = require('../models/productModel')

const getAllProducts=async(req, res) => {

    try {
        const products = await Product.find()
        if (products == null) {
            throw 'Unable to retrive products'
        }

        res.status(200).send(products)

    } catch (e) {
        res.status(500).send({ error: e.errmsg ? e.errmsg : e })
    }

}

const getCategoryProducts = async(req, res) => {
    try {
        const products = await Product.find({ "category": req.params.category })
        if (products == null) {
            throw 'Unable to retrive products'
        }

        res.status(200).send(products)

    } catch (e) {
        res.status(400).send({ error: e.errmsg ? e.errmsg : e })
    }

}

module.exports={
    getAllProducts,
    getCategoryProducts
}