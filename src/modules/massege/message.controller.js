import { AppError } from "../../utils/appError.js";
import { Massege } from "../../../db/models/massege.model.js";
import { error } from "console";

//add message
export const addMessage =
 async(req,res,next)=>{
    const { message } = req.body
    const messageExists = await Massege.findOne({message})
    if(messageExists) {
        next(new AppError("Message already exists", 400))
    }
}
// get message 
export const getMessage = 
async(req, res, next)=>{
    const getMessage = await Massege.find({where:{id:req.params.id}})
   if(!getMessage) {
    return next(new AppError('Message not found', 404,{success:false}))
   }
   res.json(getMessage)
    next(new AppError({error : error.message}))
}
// delete message
export const deleteMessage = 
async(req, res, next)=>{
    const deleteMessage = new Massege.find({where: {id:req.params.id}})
    if(!deleteMessage){
        return next(new AppError('Message not found', 404,{success:false}))
    }
   await(deleteMessage).destroy()
   res.json({message:'Message Delete'})
    next(new AppError({error : error.message}))
}