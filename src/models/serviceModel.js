import mongoose from "mongoose";

const { Schema } = mongoose;
const serviceModel = new Schema({
  image: {
    size: Number,
    img: Buffer,
    contentType:String
  },
  name:{
    type:String
  },
  description:{
    type:String
  }
  
});

const Service = mongoose.model("service", serviceModel);
export default Service;
