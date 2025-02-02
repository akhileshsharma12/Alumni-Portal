import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("<h1>Server started successFully</h1>");
});

app.listen(3000,()=>{
    console.log("server is running");
})