import express from 'express'
import  {v4 as uuidv4} from 'uuid'
import * as yup from 'yup'
import * as jwtGenerator from 'jsonwebtoken'
import jwtVerify from './jwtVerify.js'
import * as dBase from './dataHandler.js'
const router = express.Router();
let entries = []
let reqEntryProperties = ["name", "email", "phoneNumber", "content"]








const entryValidationMiddleware = (req, res, next) => 
{
    let Invalid = []
    const validatingObject = (obj) => 
    { 
        for (let i = 0; i < reqEntryProperties.length; i++)
        {
            if (!(reqEntryProperties[i] in obj))
            {
                Invalid.push(reqEntryProperties[i])     
                
            }

        } 

        let schema = yup.object().shape(
            {
                name: yup.string().required(),
                email: yup.string().email('email format is Invalid'),
                phoneNumber: yup.number().required().positive().integer(),
                content: yup.string()
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



router.post('/contact_form/entries', entryValidationMiddleware, async (req, res, next) => 
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
        await dBase.eAdd(newEntry)

        return res.status(201).json(newEntry)
    } 
    catch (error) 
    {
        console.error("Route Error", error)
        return next(error)
    }
    
  
})



//router.use(jwtVerify)
router.get('/contact_form/entries', jwtVerify, async (req, res, next) => 
{
    try 
    {

        return res.status(200).json(await dBase.entryGetAll())
    } 
    catch (error) 
    {
        console.error("Route Error", error)
        return next(error)
    }
    


})


router.get('/contact_form/entries/:id', jwtVerify, async (req, res, next) => 
{

    try 
    {
        const entry = await dBase.eGetItem(req.params.id)
        return res.status(200).json(entry)
    } 
    catch (error) 
    {
        console.error("Route Error", error)
        return next(error)    
    }

    
})


export default router