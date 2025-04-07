
import mongoose, {model, Schema } from "mongoose";


//userSchema defined
const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: {type: String}
});

//contentSchema defined
const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: "Tag"}],
    userId: {type: mongoose.Types.ObjectId, ref: "User", required: true}
});

//Creating and exporting UserModel and ContentModel
export const ContentModel = model("Content", ContentSchema);
export const UserModel = model("User", UserSchema);
 