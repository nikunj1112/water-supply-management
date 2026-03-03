// import mongoose from "mongoose";

// const authSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: {
//     type: String,
//     enum: ["admin", "delivery"],
//     default: "delivery"
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "users"
//   }
// }, { timestamps: true });

// export const AuthCollection = mongoose.model("auth", authSchema);





// // populate
// // we can connect two or more collection together



import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "delivery"],
    default: "delivery"
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "profiles"
  }
}, { timestamps: true });

export const AuthCollection = mongoose.model("auth", authSchema);