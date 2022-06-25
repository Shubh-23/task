const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./route/index')
const Port = 8080

app.use(bodyParser.json())
app.use(route)

app.listen(Port,()=>{
    console.log(`server is working on - ${Port}`);
})