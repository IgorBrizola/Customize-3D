import express from 'express';
import * as dotenv from 'dotenv';
import {OpenAI} from 'openai';



dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: 'sua-chave',
});


router.route('/').get((req,res)=> {
  res.status(200).json({message: "Hello from DALL.E ROUTES"})
})

router.route('/').post(async(req,res)=> {
  try{

    const {prompt} = req.body;

    const response = await openai.images.generate({
      prompt,
      n: 1,
      size:'1024x1024',
      response_format: 'b64_json'
    });

    const image = response.data && response.data[0] && response.data[0].b64_json;

    if (image) {
      res.status(200).json({ photo: image });
    } else {
      res.status(500).json({ message: "Image data not found" });
    }
    

  }catch (error){
    console.error(error);
    res.status(500).json({message: "Something went wrong"})
  }
})

export default router;


