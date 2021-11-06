import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../models/users.js"
import AsyncHandler from "express-async-handler"
dotenv.config()
export const protect =  AsyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        try {
        const decoded = jwt.verify(token, process.env.JSON_SECRET )
        req.user = await User.findById(decoded.id).select('-password')
        next()
        }
        catch(error) {
            res.status(404)
            throw new Error("invalid token!")
        }
    }
    else {
        res.status(404)
        throw new Error("not authorized, no token available")
    }
})