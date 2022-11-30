import express from 'express';
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
const app = express();

import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/tuiter'
//const CONNECTION_STRING = 'mongodb+srv://wdelcol:<password>@cluster0.ukdowqv.mongodb.net/?retryWrites=true&w=majority';

//console.log(CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING);
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);