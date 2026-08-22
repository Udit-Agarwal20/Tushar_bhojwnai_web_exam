const mongoose = require("mongoose");

const schema = mongoose.schema({
    name : String,
    email : String,
    district : String,
    pincode : Number,
    state : Number,
    gender : String
})

module.exports = student ("student", schema);