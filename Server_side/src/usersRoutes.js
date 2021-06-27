import express from 'express'
import  {v4 as uuidv4} from 'uuid'
import * as yup from 'yup'
import * as jwtGenerator from 'jsonwebtoken'
import jwtVerify from './jwtVerify.js'
import * as dBase from './dataHandler.js'
import { NotFoundError } from './errors.js'
const router = express.Router();
let users = []
let reqUserProperties = ["name", "email", "password"]



const userValidationMiddleware = (req, res, next) => 
{
    let Invalid = []
    const validatingObject = (obj) => 
    { 
        for (let i = 0; i < reqUserProperties.length; i++)
        {
            if (!(reqUserProperties[i] in obj))
            {
                Invalid.push(reqUserProperties[i])     
                
            }

        } 

        let schema = yup.object().shape(
            {
                name: yup.string().required(),
                email: yup.string().email('email format is Invalid'),
                password: yup.string().min(8, 'password must be minimum of 8 characters') 
            })

        try 
        {
            const isValid = schema.validateSync(obj,{abortEarly: false})    
        } 
        catch (error) 
        {
            Invalid.push(error.errors)
        }

        if (Invalid.length)
        {
            return true
        } 
        else
        { 
        return false
        }

    }
   
    if (validatingObject(req.body))
    {
        return res.status(400).json({"Message": "Validation Error", Invalid})
    }
    else
    {
        next()
    }

}


router.post('/users', userValidationMiddleware, async (req, res, next) => 
{

    const id = uuidv4()
    const {name, email} = req.body
    const newEntry = 
    {
        id,
        name,
        email
    }
    try 
    {
        await dBase.uAdd(req.body)

        return res.status(201).json(newEntry)
        
    } 
    catch (error) 
    {
        console.error("Route Error", error)
        return next(error)
    }
    

})

router.post('/auth', async (req, res, next) => 
{

    const email = req.body.email
    const password = req.body.password

    try 
    {
        const users = await dBase.userGetAll()
        
        for (let i = 0; i < users.length; i++)
        {
            if (email == users[i].email && password == users[i].password)
            {
                const token = jwtGenerator.sign({email}, process.env.JWT_SECRET, {expiresIn: '5m'})
                return res.json({token})
            }
        }
    } 
    catch (error) 
    {
        console.error("Route Error", error)
        if (error instanceof NotFoundError)
        {
            return res.status(403).json({message: "incorrect credentials provided"})
        }
        else
        {
            return next(error)   
        }
    }


})


export default router