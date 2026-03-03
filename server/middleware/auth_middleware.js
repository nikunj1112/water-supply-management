import jwt from "jsonwebtoken";
import { AuthCollection } from "../models/auth_model.js";

export const protect = async (req, res, next) => {
    try {
        let token;


        // 1️⃣ Check cookie first
        if (req.cookies && req.cookies.auth_token) {
            token = req.cookies.auth_token;
        }

        // 2️⃣ Optional: Check Authorization header (for frontend / mobile apps)
        if (!token && req.headers.authorization) {
            if (req.headers.authorization.startsWith("Bearer")) {
                token = req.headers.authorization.split(" ")[1];
            }
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not authorized, no token"
            });
        }

        // 3️⃣ Verify token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // 4️⃣ Check user still exists in DB
        const user = await AuthCollection.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User no longer exists"
            });
        }

        // 5️⃣ Attach user to request
        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};