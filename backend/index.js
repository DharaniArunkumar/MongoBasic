const express=require('express')
const admin=require('./routes/AdminRoutes')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()

app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/Manpower')

mongoose.connection.on('Connected',()=>{
    console.log("Mongodb successfully connected")
})

app.get('/',(req,res)=>{
    res.send("Backend Server")
})

app.use('/admin',admin)


app.listen(3001,()=>{
    console.log("Server is running on port 3001")
})

