import Order from '../models/orderModel.js'

export const createOrderService=async(data)=>{
      console.log(data);
      const res= Order.create(data)
      return res
}

export const findOrder=async(_id)=>{
      const res=await Order.findOne({_id})
      return res
}

export const updateOrder=async(data)=>{
      const res= await Order.updateOne(data)
      return data
}



