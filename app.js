import express from 'express';
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
//const CONNECTION_STRING = 'mongodb+srv://root:1122@cluster0.7nmmmgw.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(express.json());
app.use(cors())
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);