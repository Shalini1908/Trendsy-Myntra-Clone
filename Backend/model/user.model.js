
const {mongoose} = require("mongoose")


const userSchema = mongoose.Schema({
num:Number,
pass:String,
name:String,
email:String,

})


const userModel = mongoose.model("otp" , signupSchema )


module.exports= {userModel}