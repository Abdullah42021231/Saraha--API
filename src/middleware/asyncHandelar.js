import { AppError } from "../utils/appError.js"

export const asyncHandler = (callback)=>{ 
    return (req,res,next)=>{
        callback(req,res,next).catch(error=>{
            next(new AppError(error.message , error.statuscode))
        })
    }}
    export const globalErrorHandling = (err,req,res,next)=>{
        return res.status(err.statuscode ||500).json({message: err.message,success:false})
    }