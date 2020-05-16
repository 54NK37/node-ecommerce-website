const app = require('../app')
const request = require('supertest')
const {productOne,setupDbAdmin} = require('./db')

beforeEach(setupDbAdmin)
test('Should insert a new product',async ()=>{
  const response = await request(app).post('/api/admin/addproducts')
                         .send(productOne)
                         .expect(200)  
})

test('Should get all users',async ()=>{
    const response =  await request(app).get('/api/admin/getusers')
    const users = response.body.users
    expect(users).not.toBeNull()
})