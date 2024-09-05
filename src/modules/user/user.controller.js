
import pkg from 'bcrypt'
import { User } from "../../../db/models/user.model.js"
import { AppError } from '../../utils/appError.js'


//sing up
export const singup = 
        async(req,res,next)=>{
        //get data from req
       let {name,email,password} = req.body 
        //check user exists
        const userExists = await User.findOne({email})
        if(userExists){
           next(new AppError('User already exists',409))
        } 
        //prepare data
        //hash password
        password = pkg.hashSync(password,10)
        const user = new User({
            name,
            email,
            password
        })
        const createUser = await user.save()
        if(!createUser){
            next(new AppError('failed to create user',500))
        }
        //generate token
        const token = jwt.sign({email},'abc123')
        //prepare the email 
        const emailOptions = {
            to : createUser.email,
            subject : 'Welcome to Saraha app',
            html:`<h1>Welcome,${createUser.username}!<h1>
            <p>Thank you for signup for Saraha app . Click the link below to verify your email:<p>
            <a href='http://localhost:3000/user/verify/${createUser.email}?token=${token}'>Verify Email</a>`
        };
        await sendemail(emailOptions)
        //send respons
        return res.status(201).json({message : 'User created', success : true , data : createUser})
    } 

//sign in 
export const signin = 
async(req, res, next) =>{
    //get data from req
    const {email, password} = req.body 
    //check user exists
   const emailExists = await User.findOne({email})
   if(emailExists){
    next(new AppError('email already exsist', 404))
   }
    //prepare data
        //hash password
        password = pkg.hashSync(password,10)
        const user = new User({
            email,
            password
        })
        const createEmail = await user.save()
        if(!createEmail){
            next(new AppError('failed to find your Emil',500))
        }
         //send respons
         return res.status(201).json({message : 'User created', success : true , data : createUser})
}

