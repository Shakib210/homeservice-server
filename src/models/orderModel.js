import mongoose from 'mongoose';

const {Schema} =mongoose
const orderModel= new Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    service:{
        type:String,
         required: true,
    },
    paymentMethod:{
        type: String,
         required: true,
    },
    status:{
        type: String,
        enum: ['Pending','Done'],
        required: true,
    },
})

const Order= mongoose.model('order',orderModel)
export default Order