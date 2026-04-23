import { Request, Response } from "express";
import router from "./route";

router.get("/testing",(req:Request,res:Response)=>{
    res.json({message:"Happy coding!"})
})
export default router;