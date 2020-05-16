const jwt = require('jsonwebtoken')
const User = require('../models/userModel').User
const auth = async (req,res,next)=>{

    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decodedToken =jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findOne({"userName" : decodedToken.userName,"tokens.token":token})
    
        if(user == null)
        {
            throw 'Please Authenticate!'
        }
        req.user = user
        req.token = token
        next()
    }
    catch(e)
    {
        res.status(400).send({ error: e.errmsg ? e.errmsg : e })
    }
    
}

module.exports = auth