import express from 'express';
import mongoose from 'mongoose';

import Buy from '../models/buy.js';

const router = express.Router();

export const getListBuy = async (req, res) => { 
    try {
        const list = await Buy.find();
        res.status(200).json({success : true , detail : list});
    } catch (error) {
        res.status(404).json({ success : false ,message: error.message });
    }
}

// export const getDetailBuy = async (req, res) => { 
//     const { id } = req.params;

//     try {
//         const post = await PostMessage.findById(id);
        
//         res.status(200).json(post);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

export const createBuy = async (req, res) => {
    try {
        const { full_name, phone_number , note, status, deposit , area , type_buy } = req.body;
        if(!full_name || !status || !area || !type_buy ){
            res.status(404).json({ success : false ,message: "Vui lòng nhập đầy đủ họ tên, Trạng thái, Diện tích, Hình thức mua!!" });
        }else{
            const newBuy = new Buy({ full_name, phone_number , note, status, deposit , area , type_buy })
            await newBuy.save();
            res.status(201).json({success : true , detail : newBuy});
        }
    } catch (error) {
        res.status(409).json({ success : false , message: error.message });
    }
}

// export const updatePost = async (req, res) => {
//     const { id } = req.params;
//     const { title, message, creator, selectedFile, tags } = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

//     await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

//     res.json(updatedPost);
// }

// export const deletePost = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     await PostMessage.findByIdAndRemove(id);

//     res.json({ message: "Post deleted successfully." });
// }



export default router;