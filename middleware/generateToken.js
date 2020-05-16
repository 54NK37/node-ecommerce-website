const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../models/userModel').User
const generateToken = async (req,res,next)=>{
    try{
        const token = jwt.sign({userName : req.body.userName},process.env.JWT_SECRET)
        const _id = mongoose.Types.ObjectId()
        //login
        let user = await User.findOne({"userName" : req.body.userName})
        if(user == null)
        {
        //signup
            user = new User(req.user)
        }
       //console.log(user.tokens)
       user.tokens= user.tokens.concat([{_id,token}])
        req.user = user 
        req.token=token
        next()
    }
    catch(e)
    {console.log(e)
        res.status(400).send({ error: e.errmsg ? e.errmsg : e })
    }
    
}
module.exports = generateToken