import { Request, Response } from "express";
import router from "./route";

router.get("/testing",(req:Request,res:Response)=>{
    res.json({message:"it worked nicely"})
})
export default router;