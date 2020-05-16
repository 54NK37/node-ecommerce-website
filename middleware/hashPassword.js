const bcrypt = require('bcrypt')
const User = require('../models/userModel').User
const hash = async(req, res, next) => {
    try {

        let user=await User.findOne({$or : [{"userName" : req.body.userName},{"email" : req.body.email}]})
        if(user!=null)
        {  
            user = new User(req.body)
            await user.save()
        }
        else{
            user = new User(req.body)
        }
        user.password = await bcrypt.hash(user.password,8)
        req.user = user
        next()
    } catch (e) {
        console.log(e)
        res.status(400).send({ error: e.errmsg ? e.errmsg : e })
    }
}

module.exports = hash