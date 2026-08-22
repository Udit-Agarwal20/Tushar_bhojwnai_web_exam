const mongoose = require("mongoose");

const connectDB = async (req,res,next)=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/test1");
        console.log("Connected...");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;