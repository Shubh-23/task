const bookshelf = require('../dataBase/db')

const blog = bookshelf.model('blog',{
    tableName:'blog',
    idAttribute:'id'
})

module.exports = blog