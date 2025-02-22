import bodyParser from 'body-parser';
import express from 'express';
import db from './config/db.config.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
db.connect();

app.get("/", async (req,res)=>{
    try {
       
        const result = await db.query("SELECT * FROM users");
        res.json(result.rows);
    } catch (error) {
        console.log(error);
    }
});

app.listen(3000,()=>{
    console.log("server is running");
});