import { model, Schema } from "mongoose";
import { type } from "os";
//schema
const userSchema = new Schema({
   username:{
    type:String,
   
   },
   email:{
    type:String,
    required:true,
    unique:true,
    
   } ,
   password:String,
},{timestamps: true});
//model
 export const User =  model('User', userSchema);
