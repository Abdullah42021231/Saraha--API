import { model,Schema } from "mongoose";
import { type } from "os";

//schema 
const massegeSchema = new Schema({
   content:{
    type: String,
    required: true,
    max:1000,
    min: 200
   },
   receiverId:String
},{timestamps: true});
//model
export const Massege = model('Massege', massegeSchema);