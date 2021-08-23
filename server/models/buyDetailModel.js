import mongoose from 'mongoose';

const bag = {
    type : {type : Number , require :true},
    kilo :  {type : Number , require :true },
}
const buyDetailSchema = mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Buy', required: true },
    driver: {type : String , require :true },
    note: String,
    status : Number ,
    box : {type : Number , require :true },
    bags : [bag],
    type_payment : Number , // 1: cân kí ,2 : mua xào
    money : Number,
    
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var BuyDetail = mongoose.model('Buy', buyDetailSchema);

export default BuyDetail;