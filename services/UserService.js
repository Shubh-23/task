const userTable  = require('../model/user.model')

class User{

    userLogin(params){
        return userTable.forge().query((qb)=>{
            qb.where({'email':params.email})
            qb.andWhere({'password':params.password})
        }).fetchAll().then((data)=>{
            return data
        }).catch((err)=>{
            return err
        })
    }

    userRegistration(params){
        const data = {
            "first_name":params.firstName,
            "last_name":params.lastName,
            "email":params.email,
            "password":params.password,
            "DOB":params.dob,
            "role":params.role,  //role for the Admin '1' and for user '2'
        }

        const user = new userTable(data)
        return user.save(null).tap(res=>{
            return res
        }).catch((err)=>{
            return err
        })
    }




}

module.exports = new User