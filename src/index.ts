import mongoose from "mongoose";
import express from "express";
import jwt from "jsonwebtoken";

const app = express();
mongoose.connect("mongodb+srv://divyanshukumar:rZ5YWGQLSiDLZBQ9@cluster0.brmkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.get("api/v1/signin", (req, res)=>{
    

});

app.post("api/v1/signin", (req, res)=>{

});

app.post("api/v1/content", (req, res)=>{

});

app.get("api/v1/content", (req, res)=>{

});

app.delete("api/v1/content", (req, res)=>{

});

app.post("api/v1/brain/shareLink", (req, res)=>{

});

app.listen(3000);
