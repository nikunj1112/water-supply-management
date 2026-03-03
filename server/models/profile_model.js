import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: String,
  address: String,
  education: String,
  age: Number,
  exp: String,
  image: String
}, { timestamps: true });

export const ProfileModel = mongoose.model("profiles", profileSchema);