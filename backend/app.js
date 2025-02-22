import bodyParser from 'body-parser';
import express from 'express';
import db from './config/db.config.js';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const env = dotenv.config().parsed;
const app = express();
const port = env.PORT || 3000;

// enable cors-policy for api-being used by unknown browsers from another ports
app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
db.connect();

app.use("/api/user", userRoutes);

app.listen(port,()=>{
    console.log("server is running at localhost " + port);
});