import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {type:String},
    email:{type:String},
    username:{type:String},
    password:{type:Number}
})

// userSchema.pre('save',async ())


const user = mongoose.model("User", userSchema)


export default user
