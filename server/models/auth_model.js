import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // optional but recommended
    },
    password: {
      type: String,
      required: true,
    },
    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "users"
    // }
  }, { timestamps: true });

export const AuthCollection = mongoose.model("auth", authSchema);

// populate
// we can connect two or more collection together
