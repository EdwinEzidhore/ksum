import mongoose from "mongoose";


const formSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: Date, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  bio: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Form', formSchema);
