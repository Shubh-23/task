const bookshelf = require('../dataBase/db')

const user = bookshelf.model('user',{
    tableName:'user',
    idAttribute:'id'
})

module.exports = user