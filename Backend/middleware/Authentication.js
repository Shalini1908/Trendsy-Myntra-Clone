
const jwt = require("jsonwebtoken")


const authenticate = (req,res,next)=>{

   const token = req.headers.authorization

   if(token){

       const decoded = jwt.verify(token,"masai")

       if(decoded){
      const id =  decoded.userID

      req.body.userID = id
        next()

       }else{
      res.send("please login first")
       }


   }else{

       res.send("please login first")

   }

}

module.exports = {authenticate} 