import express from "express";
import { usersData } from "../allData/usersData.js";



const users = express.Router()

users.get("/", (req , res) => {
    res.status(200).send({status: 200 , message: "success" , data: usersData})
})
users.get("/:id", (req , res) => {
    res.status(200).send({status: 200 , message: "success" , data:[]})
})

export default users;