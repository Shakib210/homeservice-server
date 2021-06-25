import { createOrderService, findOrder,updateOrder } from "../services/orderService.js";

export const orderCreateController = async (req, res, next) => {
  const { name, email, service, paymentMethod, status } = req.body;

  const data = { name, email, service, paymentMethod, status };
  const response = await createOrderService(data);
  res.json(response);
};

export const updteOrderService = async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  const order = await findOrder(id);
  order.status = status;
//   const response = await updateOrder(order);
  const data = await order.save()
  res.json(data)
};


export const orderDetails= async (req, res)=>{
    const id = req.params.id;
     const order = await findOrder(id)
     res.json(order)
}

export const getOrderByEmail=async(req,res)=>{ 
       res.json("Ok")
}
