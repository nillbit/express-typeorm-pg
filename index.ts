import  "dotenv/config";
import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import userRoute from "./router/userRoute"

const app = express();
app.use("/api/user",userRoute);
const port = process.env.APP_PORT;
AppDataSource.initialize().then(()=>{
    console.log("Database connected");
    app.listen(port,()=>{
        console.log("server running!");
    });
}).catch((err)=>console.error(err));

