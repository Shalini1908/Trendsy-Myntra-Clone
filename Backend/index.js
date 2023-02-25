const express = require("express");
const cors = require("cors");
const {authenticate}= require("../Backend/middleware/Authentication")
const { connection } = require("./config/db");
const { dataroutes } = require("./routes/data.routes");
const { cartroutes } = require("./routes/cart.routes");
const { userRouter } = require("./routes/user.routes");

const { authenticate } = require("./middleware/Authentication");
const {adminRouter} = require("./routes/admin.routes")



const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello trends");
});

app.use("/admin" , adminRouter)
app.use(authenticate);

app.use("/data", dataroutes);
app.use(authenticate);
app.use("/cart", cartroutes);



const upload = multer({
storage:multer.diskStorage({
  destination:function(req,file,cb){
  cb(null,"uploads")

  },
  filename:function(req,file,cb){
    cb(null,file.fieldname +"-"+Date.now()+".jpg")
  }
})

}).single("picture")

app.post("/upload",upload,(req,res)=>{
  res.send("Uploded")
})


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {

    console.log({ msg: error.message });

    console.log("Can't connect to db")

    console.log({"msg":error.message})

  }
});
