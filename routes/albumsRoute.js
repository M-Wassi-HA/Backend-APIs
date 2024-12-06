import express from "express";
import { albumsData } from "../allData/albumsData.js";



const albums = express.Router()

albums.get("/", (req , res) => {
    res.status(200).send({status: 200 , message: "success" , data: albumsData})
})
albums.get("/:id", (req , res) => {
    res.status(200).send({status: 200 , message: "success" , data:[]})
})

export default albums;