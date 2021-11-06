import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JSON_SECRET, {
        expiresIn: '30d',
    });
} 
