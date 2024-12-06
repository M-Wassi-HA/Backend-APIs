import express from "express";
import { photosData } from "../allData/photosData.js";

const photos = express.Router()

photos.get("/", (req , res) => {
    res.status(200).send({status: 200 , message: "success" , data: photosData})
})
photos.get("/:id", (req , res) => {
    res.status(200).send({status: 200 , message: "success" , data:[]})
})

export default photos;