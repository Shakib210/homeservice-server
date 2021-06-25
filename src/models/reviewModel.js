import mongoose from 'mongoose';

const {Schema} =mongoose
const reviewModel= new Schema({
    name: {
        type: String,
        required: true,
    },
    companyName:{
        type:String,
        required: true,
    },
    description:{
        type:String,
         required: true,
    },
})

const Review= mongoose.model('review',reviewModel)
export default Review