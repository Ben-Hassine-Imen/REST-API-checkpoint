const express=require('express')
const router=express.Router()
const UserModel=require('../models/User')

// ADD A NEW USER TO THE DATABASE 

router.post('/user',(req,res)=>{
    const{name,age,favoriteFoods}=req.body
    const newUser =new UserModel({
        name:name,
        age:age,
        favoriteFoods:favoriteFoods
    })
    newUser.save()
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))
})

 
 // RETURN ALL USERS 
router.get('/user',(req,res)=>{
    UserModel.find()
    .then(users=>res.status(200).json(users))
    .catch(err=>res.status(400).json(err))
})
 //REMOVE A USER BY ID 
router.delete('/user/:id',(req,res)=>{
    UserModel.findByIdAndDelete(req.params.id)
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))
})
 // EDIT A USER BY ID 
router.put('/user/:id',(req,res)=>{
    UserModel.findByIdAndUpdate(req.params.id,req.body)
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))
})

module.exports=router