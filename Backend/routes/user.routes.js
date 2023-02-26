const {userModel} = require("../model/user.model")
const express = require("express")
const userRouter = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// getting all user

userRouter.get("/" ,async (req,res)=>{
try{

    const user = await userModel.find()
      res.send(user)
}catch(err){
 res.send({"msg":"user not found",err:err.message})
}

   res.send("otp sent successfully")
} )


// registering the user //

userRouter.post("/register" , async (req,res)=>{

   const {num,pass,name,email,gender} = req.body

  const pre =  await userModel.find({num:num})
  if(pre.length>0){
   return res.send({"Msg":"user already present"})

  }
    try{

       bcrypt.hash(pass , 10,async (err, hash)=>{

           if(err){
               console.log(err)
           }
   const user = new userModel({num,name,pass:hash,email,gender})
       await user.save()
       // res.send("user registered successfully")

   const getUser =   await userModel.find({num:num})
   
   if(getUser.length===0){

       return  res.send({"msg":"user not found"})
 
     }
 
     bcrypt.compare(pass, getUser[0].pass, (err, result)=> {
         
         if(result){
             const token = jwt.sign({ userID: getUser[0]._id  }, 'masai');
             
      res.send({"msg":"signup successfull","token":token})
         }else{
             res.send({"err":"login failed"})
         }
 
     })

       
   })



    }catch(err){

       res.send("otp sent successfully")
    }



} )


 // log in route //

userRouter.post("/login" , async (req,res)=>{


   const {num} = req.body

   try{

      let user =  await userModel.find({num:num})

      if(user.length===0){
       return res.send({"msg":"user not found"})
      }
      

           const token = jwt.sign({ userID: user[0]._id  }, 'masai') ;
         
    res.send({"msg":"Login successfull","num":user[0].num})
       
       



   }catch(err){
       console.log(err)
   }

})


 // log in route //

 userRouter.post("/login1" , async (req,res)=>{
  
 
    const {num,pass} = req.body
 
    try{
 
       let user =  await userModel.find({num:num})
 
       if(user.length===0){
        return res.send({"msg":"user not found"})
       }
       

       bcrypt.compare(pass, user[0].pass, (err, result)=> {
         
        if(result){
            const token = jwt.sign({ userID: user[0]._id  }, 'masai');
            
     res.send({"msg":"login successfull","token":token,"name":user[0].name})
        }else{
            res.send({"err":"login failed"})
        }

    })
 
        
    }catch(err){
        console.log(err)
    }
 
 })
 

module.exports = {userRouter}







