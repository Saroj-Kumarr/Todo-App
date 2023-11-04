const mongoose=require("mongoose");


require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("Successfully connected ✅"))
    .catch((error)=>{
        console.log("Connection failed ❌");
        console.log(error.message);
        process.exit(1)
    })
}