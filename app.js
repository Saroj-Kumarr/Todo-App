const express = require('express');

const app=express();


require('dotenv').config();

const PORT=process.env.PORT || 3000;

app.use(express.json());

const todoRoutes=require('./routes/todos');


app.listen(PORT,()=>{
    console.log("Server is started on "+PORT);
})


const dbConnect=require("./config/database");
dbConnect();

app.get("/",(req,res)=>{
    res.send('<h3>Jay shri ganeshay namay 🙏</h3>')
})

