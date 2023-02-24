const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { dataroutes } = require("./routes/data.routes");
const { cartroutes } = require("./routes/cart.routes");
const { userRouter } = require("./routes/user.routes");
const { authenticate } = require("./middleware/Authentication");

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello trends");
});
app.use(authenticate);
app.use("/user", userRouter);
app.use("/data", dataroutes);
app.use("/cart", cartroutes);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    console.log({ msg: error.message });
  }
});
