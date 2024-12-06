import express from "express";
import { commentsData } from "../allData/commentsData.js";


const comments = express.Router()

comments.get("/", (req , res) => {
    res.status(200).send({status: 200 , message: "success" , data: commentsData})
})
comments.get("/:id", (req , res) => {
    res.status(200).send({status: 200 , message: "success" , data:[]})
})

export default comments;