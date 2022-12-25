import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 5,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 5,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true,
  },
  mail: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    
    },
    phone: {
        type: String,
        required:true
  }
  
});

const User = mongoose.model("User", userSchema);
export default User;
