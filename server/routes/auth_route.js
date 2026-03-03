import express from "express";

// Controllers import
import {
    signup,
    signin,
    verifyOTP,
    signout,
    checkLoginStatus,
    // changePassword,
    // forgotPassword,
    // changeForgotPassword  ,
} from '../controllers/auth_controller.js';




const auth_Router = express.Router();

/* ===================== AUTH ROUTES ===================== */

// Signup
auth_Router.post("/signup", signup);

// Signin (password check + send OTP)
auth_Router.post("/signin", signin);

// Verify OTP (login success)
auth_Router.post("/verify-otp", verifyOTP);

// Logout / Signout
auth_Router.post("/signout", signout);

// Check login status
auth_Router.get("/check-login", checkLoginStatus);

// // Change password (logged-in user)
// auth_Router.post("/change-password", changePassword);

// // Forgot password (send OTP)
// auth_Router.post("/forgot-password", forgotPassword);

// // Change forgot password (OTP + new password)
// auth_Router.post("/change-forgot-password", changeForgotPassword); 

export default auth_Router;



