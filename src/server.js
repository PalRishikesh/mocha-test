const express = require("express");
const mongoose = require("mongoose");
const ProductRouter = require("./routes/product");
const AuthRouter = require("./routes/auth");
require("dotenv-flow").config();

const app = express();
const PORT = process.env.PORT || 4000 

// DB Connection

mongoose.connect(process.env.DB_HOST);
mongoose.connection.once('open',()=>{
    console.log('Connected successfully to MongoDB');
})


// Swagger setup

const swaggerUI = require("swagger-ui-express");
const yaml = require('yamljs');

const swaggerDefination = yaml.load('./swagger.yaml')

app.use('/api/docs',swaggerUI.serve, swaggerUI.setup(swaggerDefination))


app.use(express.json())

app.get('/',(req,res)=>{
    return res.send({
        message:'Home page'
    })
})

app.get('/home',(req,res)=>{
    return res.send({
        message:'Home page content'
    })
})


app.use("/api/products",ProductRouter);
app.use("/api/users",AuthRouter);


// app.listen(PORT,(err)=>{
//     if(!err){
//         console.log(`Server is running at port ${PORT}`);
//     }
// })


module.exports = app;