import express, { Router } from "express";
import type { Request, Response } from "express";
import { registerSchema } from "../validation/authValidation.js";
import { formatError, ZodError } from "zod";
const router = Router();

router.post("/register",async(req:Request,res:Response)=>{
    try{
        const body = req.body;
        const payload = registerSchema.parse(body);
        res.json(payload);
    }catch(err){
        if(err instanceof ZodError){
            const errors = formatError(err)
            return res.status(422).json({message:"Invalid Data",errors});
        }
    }
})



export default router;