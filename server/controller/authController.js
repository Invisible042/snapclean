import express from 'express'
import  user from '../models/user.js'
// import bcrypt from 'bcrypt'


const signupAuth =async (req, res)=>{
    console.log("hello")
    const {username, password} =await req.body
    const existingUser = await user.findOne({username})
    if(existingUser){
        res.status(400).send("user already exist")
    }
    else{
        await user.create({username, password})
        res.status(200).send("user created successfully")
    }
}

const loginAuth = async (req, res) =>{
    const {email, password} = await req.body
    const isUser = await user.findOne({email, password})
    console.log(req.body)

    if(isUser){
      res.status(200).send("logged in successfully")
    }
    else{
        res.status(400).send("user does not exist")
    }
}

const removeBgAuth = async(req, res) =>{
    const {file} = req.body
    console.log(file)
}



export {signupAuth, loginAuth, removeBgAuth}
