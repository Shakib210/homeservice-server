import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";
import Service from "../models/serviceModel.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const createService=async(req,res)=>{
    const {name, desc}=req.body
    const file = req.files.images;
    console.log(file);
  
    const filePath = `${__dirname}/../../resource/${file.name}`;
    await file.mv(filePath, (err) => {
      if (err) {
        console.log(err);
      }
      const newImage = fs.readFileSync(filePath);
    const encodedImage = newImage.toString("base64");
  
    const image = {
      contentType: req.files.images.mimetype,
      size: req.files.images.size,
      img: Buffer(encodedImage, "base64"),
    };
    
    const data ={ 
        image,name,
        description: desc
    }
  
     const response =storeData(data)  
     res.json(response);
    });
}

const storeData =async(data)=>{
   const res=await Service.create(data)
   console.log(res);
   return res
}


export const getServices=async(req, res)=>{
       const response=await Service.find();
       console.log(response);
       res.json(response)
}