import express from 'express';
import userRouter from './src/modules/user/user.router.js';
import messageRouter from './src/modules/massege/message.router.js';
import { connectDB } from './db/connection.js';
import { globalErrorHandling } from './src/middleware/asyncHandelar.js';

const app = express();
const port = 3000
app.use(express.json())
connectDB()
app.use('/user', userRouter)
app.use('/message', messageRouter)
app.use(globalErrorHandling)
app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})
