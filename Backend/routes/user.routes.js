

const {userModel} = require("../model/user.model")

const express = require("express")

const userRouter = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

userRouter.get("/" ,(req,res)=>{
   res.send("otp sent successfully")
} )


// registering the user //

userRouter.post("/register" , async (req,res)=>{

   const {num,pass,name,email} = req.body

  const pre =  await userModel.find({num:num})
  if(pre.length>0){
   return res.send({"Msg":"user already present"})
  }
    try{

       bcrypt.hash(pass , 10,async (err, hash)=>{

           if(err){
               console.log(err)
           }
   const user = new userModel({num,name,pass:hash,email})
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
                   
    res.send({"msg":"Login successfull","token":token})
       
       



   }catch(err){
       console.log(err)
   }

})


module.exports = {userRouter}







