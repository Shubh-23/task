
const blogTable  = require('../model/user.model')



module.exports = function userLoginValidation(req,res,next){
        return blogTable.forge().query((qb)=>{
            qb.where({'email':req.body.email})
        }).fetch().then((data)=>{
            next()
        }).catch((err)=>{
            return res.json({'ErrorCode':500,'message':"Please enter a valid user name"})
        })
    }



