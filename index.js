import express from "express";
import dotenv from "dotenv"
import post from "./routes/postRoute.js";
import comments from "./routes/commentsRoute.js";
import albums from "./routes/albumsRoute.js";
import photos from "./routes/photosRoute.js";
import todos from "./routes/todosRoute.js";
import users from "./routes/usersRoute.js";

const app = express(); 
dotenv.config();



app.use("/post", post);
app.use("/comments", comments);
app.use("/albums", albums);
app.use("/photos", photos);
app.use("/todos", todos);
app.use("/users", users);


app.get("*",(req,res)=>{
    res.status(404).send("page not found")
})







const Port = process.env.Port || 8080
app.listen(Port,() => {
    console.log(`server is started ${Port}`);
    
}) 