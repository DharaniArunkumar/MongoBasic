const mongoose=require('mongoose')

const adminSchema = new mongoose.Schema({
    name:String,
    number:String,
    email:String
})

const Admin = mongoose.model('Manpower', adminSchema)

module.exports= Admin

