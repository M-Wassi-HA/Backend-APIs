import express from "express";
import postData from "../allData/postData.js";

const post = express.Router()

post.get("/", (req , res) => {
    res.status(200).send({status: 200 , message: "success" , data: postData})
})
post.get("/:id", (req , res) => {
    res.status(200).send({status: 200 , message: "success" , data:[]})
})

export default post;