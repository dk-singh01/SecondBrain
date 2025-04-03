
import {Model, Schema } from "mongoose";
//creating usermodel and table schema


const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: {type: String}
})

const UserModel = new Model({

})