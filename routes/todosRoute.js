import express from "express";
import { todosData } from "../allData/todosData.js";


const todos = express.Router()

todos.get("/", (req , res) => {
    res.status(200).send({status: 200 , message: "success" , data: todosData})
})
todos.get("/:id", (req , res) => {
    res.status(200).send({status: 200 , message: "success" , data:[]})
})

export default todos;