
import mongoose from "mongoose";
import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";

const JWT_PASSWORD = "random123123";

mongoose.connect("mongodb+srv://divyanshusingh1101:QOSYnHbQQPV7rTk0@cluster0.s5vmhfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const app = express();
app.use(express.json());
app.post("/api/v1/signin", async (req, res)=>{
    //adding zod validation here later
    const username = req.body.username;
    const password = req.body.password;

    try{await UserModel.create({
        username: username,
        password: password
    });
    res.json({
        message: "you have signed up "
    });
    }catch(e){
        res.status(411).json({
            message: "user already exists"
        })
    }
});

app.post("api/v1/signin", async(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if(existingUser){
        const token = jwt.sign

    }

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
