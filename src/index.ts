
import mongoose from "mongoose";
import express from "express";
import jwt from "jsonwebtoken";
import { ContentModel, UserModel } from "./db";
import { JWT_PASSWORD } from "./config";
import { userMiddleware } from "./middleware";
//connecting to database;
mongoose.connect("mongodb+srv://divyanshusingh1101:QOSYnHbQQPV7rTk0@cluster0.s5vmhfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const app = express();
app.use(express.json());
app.get("/api/v1/signin", async (req, res)=>{
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

app.post("/api/v1/signin", async(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD);

        res.json({token});
    } else{
       res.status(403).json({
        message: "Incorrect credentials"
       }) 
    }

});

app.post("/api/v1/content", userMiddleware, async(req, res)=>{
    const title = req.body.title;
    const link = req.body.link;
    const type = req.body.type;
    await ContentModel.create({
        title,
        link,
        type,
        //@ts-ignore
        userId: req.userId,
        tags: []
    });
    res.json({
        message: "Content added"
    })
    
});

app.get("/api/v1/content", async(req, res)=>{
    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        useId: userId
    }).populate("userId", "username")
    res.json({
        content
    })
});

app.delete("/api/v1/content", async(req, res)=>{
    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    })
    res.json({
        message: "Deleted Content"
    })
});

app.post("/api/v1/brain/shareLink", (req, res)=>{

});

app.listen(3000);
