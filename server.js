const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config({path:'config/.env'})
const app= express()
app.use(express.json())
 mongoose.connect(process.env.DB_URI, { useUnifiedTopology: true , useNewUrlParser: true },(err)=>{
     if (err)
    throw err;
    console.log('dbconnected')
 })
 app.use('/api',require('./routes/user'))
app.listen(5000,()=>{
    console.log('connected')
})










