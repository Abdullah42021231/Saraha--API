import { Router } from "express";
import { asyncHandler } from "../../middleware/asyncHandelar.js";
import { addMessage , getMessage , deleteMessage} from "./message.controller.js";

const messageRouter = Router()
//add message 
messageRouter.post('/', asyncHandler(addMessage))
//get message
messageRouter.get('/', asyncHandler(getMessage))
//delete message
messageRouter.delete('/', asyncHandler(deleteMessage))
export default messageRouter