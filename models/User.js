const mongoose=require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      default: "adem"
    },
    age:  { type: Number, required: true, default: 2 },
    phoneNumber: {
      type: Number,
      required: true
  },
  email: {
    type: String,
    required: true
},
  });
  module.exports=mongoose.model('user',userSchema)