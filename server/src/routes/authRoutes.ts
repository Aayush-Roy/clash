import express, { Router } from "express";
import type { Request, Response } from "express";
import { registerSchema } from "../validation/authValidation.js";
import { email, formatError, ZodError } from "zod";
import bcrypt from "bcrypt"
import { v4 as uuid4 } from "uuid";
import prisma from "../config/database.js";
import { renderEmailEjs } from "../helper.js";
import { emailQueue, emailQueueName } from "../jobs/EmailJob.js";
const router = Router();

router.post("/register",async(req:Request,res:Response)=>{
    try{
        const body = req.body;
        const payload = registerSchema.parse(body);

       
        let user = await prisma.user.findUnique({
            where:{
                email:payload.email
            }
        })
        if(user){
            return res.status(422).json({
                errors:{
                    email:"Email already taken please use another email"
                }
            })
        }

        //Encrypting password
        const salt = await bcrypt.genSalt(10);
        payload.password = await bcrypt.hash(payload.password,salt);

        const token = await bcrypt.hash(uuid4(),salt);
        const url = `${process.env.APP_URL}/verify-email?email=${payload.email}&token=${token}`

        const emailBody = await renderEmailEjs("verify-email",{name:payload.name,url:url})
        await emailQueue.add(emailQueueName,{to:payload.email,
            subject:"Clash Email verification", body:emailBody
        })
        await prisma.user.create({
            data:{
                name:payload.name,
                email:payload.email,
                password:payload.password
            }
        })
        // res.json(payload);
        return res.json({message:"Please check your email we have sent a verification email!"})
        
    }catch(err){
        if(err instanceof ZodError){
            const errors = formatError(err)
            return res.status(422).json({message:"Invalid Data",errors});
        }
        return res.status(500).json({message:"Something went wrong. please try again later!"})
    }
})



export default router;