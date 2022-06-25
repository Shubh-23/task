const blogService = require('../services/blog.service')

class blog{

    createBlog(req,res){
        const params = req.body
        console.log(params);
        return blogService.createBlog(params).then((data) =>{
            if(data){
                return res.json({'ErrorCode':200,'message':'data save succefully',"data":data})
            }else{
                return res.json({'ErrorCode':500,'message':"Something want's wroung",'data':data})
            }
        })
    }

    listOfBlog(req,res){
            return blogService.listOfBlog().then((data) =>{
                if(data){
                    return res.json({'ErrorCode':200,'message':'list of blog ',"data":data})
                }else{
                    return res.json({'ErrorCode':500,'message':"Something want's wroung",'data':[]})
                }
            })
        }
    
    updateBlog(req,res){
        const params = req.body
        return blogService.updateBlog(params).then((data) =>{
            if(data){
                return res.json({'ErrorCode':200,'message':'update list of blog ',"data":data})
            }else{
                return res.json({'ErrorCode':500,'message':"Something want's wroung",'data':[]})
            }
        })
    }  
    
    deleteBlog(req,res){
        const params = req.body
        return blogService.deleteBlog(params).then((data) =>{
            if(data){
                return res.json({'ErrorCode':200,'message':'delete blog ',"data":data})
            }else{
                return res.json({'ErrorCode':500,'message':"Something want's wroung",'data':[]})
            }
        })
    }
}

module.exports = new blog