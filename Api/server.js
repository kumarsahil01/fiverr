import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();
import userroute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageroute from "./routes/message.route.js";
import reviewroute from "./routes/review.route.js";
import authroute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

 mongoose.set('strictQuery' ,true)
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongo db");
  } catch (error) {
    console.error(error);
  }
};
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5175');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(cookieParser());
app.use(cors({ origin: "http://127.0.0.1:5173",   credentials: true}));
app.use(express.json());


app.use("/api/auth", authroute);
app.use("/api/users", userroute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageroute);
app.use("/api/reviews", reviewroute);

app.listen(8000, () => {
  connect();
  console.log("backend server is running ");
});
