const blogTable = require('../model/blog.model')


class blog{
    createBlog(params){
        const data = {
            "user_Id":params.userId,
            "title":params.title,
            "discription":params.discription,
            "publised_date":params.publisedDate,
            "modify_date":params.modifyDate,
            "status":params.status,  //status for the Publish '1' and for Unpublish '0'
            "category_id":params.categoryId,  
        }

        const blogData = new blogTable(data)
        return blogData.save(null).tap(res=>{
            return res
        }).catch((err)=>{
            return err
        })
    }

    listOfBlog(){
        return blogTable.forge().query((qb)=>{
            qb.select('*')
        }).fetchAll().then(data=>{
            return data
        }).catch((err)=>{
            return err
        })
    }

    updateBlog(params){
        return blogTable.forge().query((qb)=>{
            qb.where({'id':params.id})
        }).fetch().then(data=>{
            if(data!=null){
                const newData = {
                    "user_Id":params.userId,
                    "title":params.title,
                    "discription":params.discription,
                    "publised_date":params.publisedDate,
                    "modify_date":params.modifyDate,
                    "status":params.status,  //status for the Publish '1' and for Unpublish '0'
                    "category_id":params.categoryId,  
                }
                const patch = {
                    patch:true
                }
                return data.save(newData,patch).then((data)=>{
                    return data
                })
            }else{
                return data
            }
        })
    }

    deleteBlog(){
        return blogTable.forge().query((qb)=>{
            qb.where({'id':params.id})
            qb.del()
        }).fetchAll().then(data=>{
            return data
        }).catch((err)=>{
            return err
        })
    }


} 
 
module.exports = new blog