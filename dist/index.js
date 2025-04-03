"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
mongoose_1.default.connect("mongodb+srv://divyanshukumar:rZ5YWGQLSiDLZBQ9@cluster0.brmkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
app.get("api/v1/signin", (req, res) => {
    res.send(mongoose_1.default.Document);
});
app.post("api/v1/signin", (req, res) => {
});
app.post("api/v1/content", (req, res) => {
});
app.get("api/v1/content", (req, res) => {
});
app.delete("api/v1/content", (req, res) => {
});
app.post("api/v1/brain/shareLink", (req, res) => {
});
app.listen(3000);
