import express from 'express'
import  user from '../models/user.js'
// import bcrypt from 'bcrypt'


const signupAuth =async (req, res)=>{
    const {username, password, email} =await req.body
    await user.findOne({email, username}) ? res.send("user already exist") : user.create({email, password, username})
    res.status(200).send("account created successfully verify your email address")
}

const loginAuth = async (req, res) =>{
    const {email, password} = await req.body
    await user.find({email, password}) ? res.send("Login successfully") : res.send("incorrect email or password")
}

export {signupAuth, loginAuth}
