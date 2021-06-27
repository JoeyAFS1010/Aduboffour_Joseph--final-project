import { promises as fs } from 'fs'
import path from 'path'
import {NotFoundError} from './errors.js'
import { isArray } from 'util'
import { stringify } from 'querystring';
require("dotenv").config();



let entryFile = path.resolve(process.env.ENTRY_DB_FILE_LOCATION)
let userFile = path.resolve(process.env.USER_DB_FILE_LOCATION)

console.log(entryFile)
console.log(userFile)


const fileExist = async (file) => 
{
    try 
    {
        file = await fs.open(file)
        return stringify(file)
    } 
    catch (error) 
    {
        console.error(error)
    }
}



const entryGetAll = async () => {
    try 
    {
        //entryFile = await fileExist(entryFile)
        let fileContent = await fs.readFile(entryFile)
        return JSON.parse(fileContent)
    } catch (err) {
        console.error("dataModule error", err)
        throw err
    }
}


const userGetAll = async () => {
    try 
    {
        //userFile = await fileExist(userFile)
        let fileContent = await fs.readFile(userFile)
        return JSON.parse(fileContent)
    } catch (err) {
        console.error("dataModule error", err)
        throw err
    }
}


const eWrite = async (data) => {
    await fs.writeFile(entryFile, JSON.stringify(data))
}

const uWrite = async (data) => {
    await fs.writeFile(userFile, JSON.stringify(data))
}


const eAdd = async (data) => {
    try {
        let fileContent = await entryGetAll()
        fileContent.push(data)
        await eWrite(fileContent)
        console.log("File written")
    } catch (err) {
        console.error(err)
        throw err
    }

}

const uAdd = async (data) => {
    try {
        let fileContent = await userGetAll()
        fileContent.push(data)
        await uWrite(fileContent)
        console.log("File written")
    } catch (err) {
        console.error(err)
        throw err
    }

}


const eGetItem = async (id) => {
    let fileContent = await entryGetAll()
    if (!isArray(content)) {
        throw new Error("No data found")
    }

    const itemLocation = content.findIndex(item => item.id=== id)
    console.log(id)
    if (itemLocation != -1) {
        return fileContent[itemLocation]
    } else {
        throw new NotFoundError(`ID: ${id} not found`)
    }

}

const uGetItem = async (id) => {
    let fileContent = await userGetAll()
    if (!isArray(content)) {
        throw new Error("No data found")
    }

    const itemLocation = content.findIndex(item => item.id=== id)
    console.log(id)
    if (itemLocation != -1) {
        return fileContent[itemLocation]
    } else {
        throw new NotFoundError(`ID: ${id} not found`)
    }

}


export {
    eAdd,
    entryGetAll,
    eGetItem,
    uAdd,
    userGetAll,
    uGetItem
}