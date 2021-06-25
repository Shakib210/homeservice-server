import {insertReviewService, getReviewsService} from '../services/reviewService.js'

export const createReview= async (req, res)=>{
      const {name, companyName, description}=req.body;
      const data ={ name, companyName, description}
      const response=await insertReviewService(data)
      res.json(response)
}

export const getAllReview=async (req, res)=>{
     const response= await getReviewsService()
     res.json(response)
}