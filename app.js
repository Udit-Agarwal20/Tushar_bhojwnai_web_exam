const express = require("express");
const app = express();
const connectDB = require('./config.js/db');
const authHandler = require('./middleware/authHandler');
const errorHandler = require('./middleware/errorHandler')

connectDB();

app.use(express.json());
app.use("authHandler");
app.use("errorHandler");



app.listen(3000,()=>{
    console.log("running on port 3000...")
})