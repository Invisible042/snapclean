import mongoose from 'mongoose'

const connectDb =async ()=>{
    const url = "mongodb://localhost:27017/localdatabase"
    try{
    await mongoose.connect(url)
    console.log("connected to database successful")
    }
    catch(err){
        console.log("cant connect to db")
    }
}

export default connectDb 