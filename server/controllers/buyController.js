import express from 'express';
import Buy from '../models/buyModel.js';
import mongoose from 'mongoose';
const router = express.Router();

export const getListBuy = async (req, res) => { 
    try {
        const list = await Buy.find().sort({_id:-1}) ;
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

export const updateBuy = async (req, res) => {
    const { id } = req.params;
    const  { full_name, phone_number , note, status, deposit , area , type_buy } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({success :false , message : "Không tìm thấy đơn hàng"});
    const update = {}
    if(full_name) update.full_name = full_name
    if(phone_number ) update.phone_number  = phone_number 
    if(note) update.note = note
    if(status) update.status = status
    if(deposit) update.deposit = deposit
    if(area) update.area =  area
    if(type_buy) update.type_buy =  type_buy
    await Buy.findByIdAndUpdate({ _id : id },
                                { $set: update },
                                { new: true });
    res.status(201).json({success : true , detail : update});
}

export const deleteBuy = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({success :false , message : "Không tìm thấy đơn hàng"});

    await Buy.findByIdAndRemove(id);

    res.json({ success : true , message: "Xoá thành công!" });
}



export default router;