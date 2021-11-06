import User from "../models/users.js"
import AsyncHandler from "express-async-handler";
import {generateToken} from "../utils/token.js"


const authUser = AsyncHandler(async (req, res, next) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user) {
        if (await user.comparePassword(password)) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        }
        
        else {
            res.status(404)
            throw new Error("not authorized")
        }
    }
    
    else {
        res.status(400)
        throw new Error("no user found with that email")
    }
  });

  const addUser = AsyncHandler(async (req, res, next) => {
    const {name, email, password} = req.body
    let user = await User.findOne({email})
    if(user) {
        res.status(404)
        throw new Error("user already exists")
    }
    else {
            user = await User.create({name, email, password})
            if (user) {
                res.status(201).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user._id),
                })
            }
            else {
                res.status(400)
                throw new Error("invalid user data")
            }
    }
    
  });

  const userProfile = AsyncHandler( async (req, res) => {
        const user = await User.findById(req.user._id)
        if(user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            })
        }
        else {
            res.status(404)
            throw new Error("not authorized to access")
        }
      
  }) 

  export {authUser, addUser, userProfile}