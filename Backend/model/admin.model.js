
const {mongoose} = require("mongoose")


const adminSchema = mongoose.Schema({
email:String,
pass:String,
icon:String

})


const adminModel = mongoose.model("admin" , adminSchema)



module.exports= {adminModel}