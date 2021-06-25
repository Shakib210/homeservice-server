import Review from '../models/reviewModel.js'

export const insertReviewService=async(data)=>{
     const res=await Review.create(data)
     return res
}

export const getReviewsService=async()=>{
     const res= await Review.find()
     return res
}