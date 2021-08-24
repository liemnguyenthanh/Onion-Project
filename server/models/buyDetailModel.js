import mongoose from 'mongoose';

const bag = {
    id : {type : String , require :true},
    type : {type : Number , require :true},
    kilo :  {type : Number , require :true },
    total :  {type : Number , require :true },
}
const buyDetailSchema = mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Buy', required: true },
    driver: {type : String , require :true },
    note: String,
    status : Number ,
    box_l : Number,
    box_m : Number,
    box_s : Number,
    bags : [bag],
    price: Number,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var BuyDetail = mongoose.model('BuyDetail', buyDetailSchema);

export default BuyDetail;