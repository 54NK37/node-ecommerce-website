const app = require('../app')
const request = require('supertest')
const {setupDbProduct} = require('./db')
const Product = require('../models/productModel')

beforeEach(setupDbProduct)

test('Should give all products',async()=>{
    const response = await request(app).get('/api/products')
    const products = await Product.find()   
    expect(JSON.stringify(response.body)).toEqual(JSON.stringify(products))
    })

test('Should give Fruits category products',async()=>{
const response = await request(app).get('/api/products/Fruits')
expect(JSON.stringify(response.body)).not.toBeNull()
})