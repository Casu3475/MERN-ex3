import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// INDEX --> ROUTES --> controllers --> models --> DB
import UserRoutes from "./routes/UserRoutes.js";
// import AuthRoute from "./routes/AuthRoute.js";
// import PostRoute from "./routes/PostRoute.js";
// import UploadRoute from "./routes/UploadRoute.js";
// import ChatRoute from "./routes/ChatRoute.js";
// import MessageRoute from "./routes/MessageRoute.js";

// initializations
const app = express();

// middleware
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

dotenv.config();

// variables
// const PORT = process.env.PORT;
// const CONNECTION = process.env.MONGODB_CONNECTION;

// connect to mongodb
mongoose
  .connect(
    "mongodb+srv://rom:MONGO_r223475@casu.usuxxbd.mongodb.net/rom_db?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(5000, () => console.log(`Connected to MongoDB on Port 5000`))
  )
  .catch((err) => console.log(`${err} Failed to connect to MongoDB`));

// routes usage
app.use("/user", UserRoutes);
// app.use("/auth", AuthRoute);
// app.use("/posts", PostRoute);
// app.use("/upload", UploadRoute);
// app.use("/chat", ChatRoute);
// app.use("/message", MessageRoute);
