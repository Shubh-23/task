const express = require('express');
const route = express.Router()
const user = require('../controller/User.controller')
const userValidation = require('../validation/user.validation')
const blogValidation = require('../validation/blog.validation')
const blog = require('../controller/blog.controller')

//user routes
route.post('/user/login',userValidation,user.userLogin)
route.post('/user/userRegistraion',user.userRegistration)


//blog routes
route.post('/blog/createBlog',blog.createBlog)
route.post('/blog/listOfBlog',blog.listOfBlog)
route.post('/blog/updateBlog',blog.updateBlog)
route.post('/blog/deleteBlog',blog.deleteBlog)

module.exports = route