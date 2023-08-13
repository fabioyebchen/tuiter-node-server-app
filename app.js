import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import session from "express-session";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const port = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);

mongoose.connect(CONNECTION_STRING);
app.listen(port);
