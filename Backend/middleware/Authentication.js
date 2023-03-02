const jwt = require("jsonwebtoken")


const authenticate = (req,res,next)=>{
//  const navigate = useNavigate()
   const token = req.headers.authorization

   if(token){

       const decoded = jwt.verify(token,"masai")

       if(decoded){
      const id =  decoded.userID
      req.body.userID = id
        next()

       }else{
      res.send("please login first")
      // navigate("/login")
       }
   }else{

       res.send("please login first")
      //  navigate("/login")
   }

}

module.exports = { authenticate } 
