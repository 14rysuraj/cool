import express from "express";
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import userRoutes from "./routes/user.js"

const app = express();



dotenv.config({
  path:"config/config.env",
})




const port = process.env.PORT || 4000;


connectDB();

//route imports
import router from "./routes/productRoute.js";






//using middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


//routes

app.get("/", (req, res) => {
  res.send("server is ready");
});
app.use('/api/user', userRoutes)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
