import express from 'express'
import  user from '../models/user.js'
import childprocess from 'child_process'
import {exec} from 'child_process'
import fs from 'fs'
import {fileURLToPath} from 'url'
import path from 'path'
// import bcrypt from 'bcrypt'

const __path = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__path)


const signupAuth =async (req, res)=>{
    res.send("Database is under construction 😎")
    // console.log("hello")
    // const {username, password} =await req.body
    // const existingUser = await user.findOne({username})
    // if(existingUser){
    //     res.status(400).send("user already exist")
    // }
    // else{
    //     await user.create({username, password})
    //     res.status(200).send("user created successfully")
    // }
}

const loginAuth = async (req, res) =>{
    res.send("database is underconstruction")
    // const {email, password} = await req.body
    // const isUser = await user.findOne({email, password})
    // console.log(req.body)

    // if(isUser){
    //   res.status(200).send("logged in successfully")
    // }
    // else{
    //     res.status(400).send("user does not exist")
    // }
}

const removeBgAuth = async(req, res) =>{
    if(!req.file){
        console.log("error");
        res.status(404).send("invalid file")
    }
    else{
        const output = path.join(__dirname, 'output.png')
        const input = req.file.path
        console.log(input)
        exec(`python ./removebg.py ${input} ${output}`, (error)=>{
            if(error){
                console.error(error)
                res.status(400).send("could not run script successfully")
            }
            else{
                console.log(output)
                console.log("successful")
                res.sendFile(output)
            }
        })
    }

}




export {signupAuth, loginAuth, removeBgAuth}
