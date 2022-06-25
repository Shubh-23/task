const userService = require('../services/UserService')

class User{

    userLogin(req,res){
        const params = req.body
        console.log(params);
        return userService.userLogin(params).then((data) =>{
            if(!data){
                
                return res.json({'ErrorCode':200,'message':'Login succefully',"data":data})
            }else{

                return res.json({'ErrorCode':500,'message':"Plase enter Right Password",'data':[]})

            }
        })
    }

    userRegistration(req,res){
        const params = req.body
        console.log(params);
        return userService.userRegistration(params).then((data) =>{
            if(!data){
                
                return res.json({'ErrorCode':200,'message':'data save succefully',"data":data})
            }else{

                return res.json({'ErrorCode':500,'message':"Something want's wroung",'data':[]})
            }
        })
    }

}

module.exports = new User