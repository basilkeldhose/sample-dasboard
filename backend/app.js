require('./db')
const express =require('express');
const bodyparser =require("body-parser");
var cors = require('cors');
const index =require('./router/index.router');
var productscontroller =require("./controllers/product.controller")

const app =express()

app.use(bodyparser.json());
app.use(cors())
app.use('/api',index)



app.listen(3000,()=>{
    console.log("server connected sucessfully..!");
})