import express from 'express';
import BuyDetail from '../models/buyDetailModel.js';
import mongoose from 'mongoose';
const router = express.Router();

export const getListDriver = async (req, res) => { 
    try {
        const list = await BuyDetail.find() ;
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

export const createDriver = async (req, res) => {
    try {
        const { owner ,driver, note, status, price , box_l ,box_m ,box_s , bags } = req.body;
        if(!owner || !driver ){
            res.status(404).json({ success : false ,message: "Vui lòng nhập đầy đủ họ tên!!" });
        }else{
            const newDriver = new BuyDetail({ owner ,driver, note, status, price , box_l ,box_m ,box_s , bags })
            await newDriver.save();
            res.status(201).json({success : true , detail : newDriver});
        }
    } catch (error) {
        res.status(409).json({ success : false , message: error.message });
    }
}

// export const updateBuy = async (req, res) => {
//     const { id } = req.params;
//     const  { full_name, phone_number , note, status, deposit , area , type_buy } = req.body;
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({success :false , message : "Không tìm thấy đơn hàng"});
//     const update = {}
//     if(full_name) update.full_name = full_name
//     if(phone_number ) update.phone_number  = phone_number 
//     if(note) update.note = note
//     if(status) update.status = status
//     if(deposit) update.deposit = deposit
//     if(area) update.area =  area
//     if(type_buy) update.type_buy =  type_buy
//     await Buy.findByIdAndUpdate({ _id : id },
//                                 { $set: update },
//                                 { new: true });
//     res.status(201).json({success : true , detail : update});
// }

// export const deleteBuy = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({success :false , message : "Không tìm thấy đơn hàng"});

//     await Buy.findByIdAndRemove(id);

//     res.json({ success : true , message: "Xoá thành công!" });
// }



export default router;