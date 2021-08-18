import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user.js';
import Bcrypt from 'bcryptjs';
const router = express.Router();

export const loginUser = async (req, res) => {
    try {
        const {username, password } = req.body
        const user = await User.findOne({ username }).exec();
        if(!user) {
            return res.status(400).send({ success : false ,  message: "The username does not exist" });
        }
        if(!Bcrypt.compareSync(password, user.password)) {
            return res.status(400).send({ success : false , message: "The password is invalid" });
        }
        res.send({  success : true ,message: "Login success!" , detail : user.username });
    } catch (error) {
        res.status(409).json({ success : false, message: "Login failed" });
    }
}

export const registerUser = async (req, res) => {
    try {
        // const { username,password } = req.body;
        // const hasd_password = Bcrypt.hashSync(password, 10);
        // console.log(hasd_password);
        // const user = new User({ username,password : hasd_password })
        // await user.save();
        // res.status(201).json(user);
        res.status(201).json("Closer papai cu!!");
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;