const app = require('../app')
const request = require('supertest')
const {setupDbUser,userOne} = require('./db')

beforeEach(setupDbUser)

test('Should signup new user',async ()=>{
    const response = await request(app).post('/api/users/signup')
                            .send(userOne)
                            .expect(201)
})

