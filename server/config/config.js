import mongoose from 'mongoose'

const connectDb =async ()=>{
    const url ="mongodb+srv://thom:<db_password>@devdev.yktpk.mongodb.net/?retryWrites=true&w=majority&appName=devdev"
    try{
    await mongoose.connect(url)
    console.log("connected to database successful")
    }
    catch(err){
        console.log("cant connect to db")
    }
}

export default connectDb 