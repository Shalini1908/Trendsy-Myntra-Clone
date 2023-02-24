
const {mongoose} = require("mongoose")


const userSchema = mongoose.Schema({
num:Number,
pass:String,
name:String,
email:String,
gender:String

})


const userModel = mongoose.model("user" , userSchema )



module.exports= {userModel}