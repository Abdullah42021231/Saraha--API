
import { AppError } from "../utils/appError.js"

export const isValid = (schema)=>{
    return (req,rea,next)=>{
        const {error} = schema.validate(req.body , {abortEarly:false})
        if(error) returnnext(new AppError(error,400))   
            next()
    }
}