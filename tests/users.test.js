const app = require('../app')
const request = require('supertest')
const {User} = require('../models/userModel')
const {setupDbUser,userOne,userTwo} = require('./db')

beforeEach(setupDbUser)

test('Should signup new user',async ()=>{
    const response = await request(app).post('/api/users/signup')
                            .send(userTwo)
                            .expect(201)
})

test('Should get a user',async ()=>{
    const response = await request(app).get('/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()

    expect(response.body.userName).toBe("sanketvf")
})

test('Should get user cart',async ()=>{
    const response = await request(app).get('/me/cart')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()

    const cart = response.body.map(element => {
     return {
            "product": element.product,
        "quantity": element.quantity,
        "price": element.price
        }
    })
    expect(JSON.stringify(cart)).toBe(JSON.stringify((userOne.cart)))

})

//almost similar test cases will exist for other get users and get orders