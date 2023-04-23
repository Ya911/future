import db from "../../lib/connectDB";
import Skecma from "../../model/userModel";
import f from "formidable";
import { Types } from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import { ConfCloud } from "../signup/promise";
import Dataset from "../../model/userModel";
import {pick as _} from 'lodash'


ConfCloud();

export const getAll = async (req, res) => {
  if (req.url === "/api/users" && !Object.keys(req.query).length) {
    await db();
    Skecma.find({}, (err, data) => {
      if (err) return { err: "not Data" };
      return res.status(200).send({ data });
    });
  } else return res.status(400).send({ err: "Not Aloowd" });
};

export const postUser = async (res) => {};

export const putOne = async (req, res) => {
  let { user } = req.query;
  let promes =  new Promise((resolve, rejact) => {
    let form = new f.IncomingForm({ keepExtensions: true });
    return form.parse(req,(err, fildes, files) => {
        console.log(files);
        if(err)return rejact(err)
        if(!Object.values(fildes).length && Object.values(files).length ){
            if (err) return rejact({ err });
           let newfiles =  _(files,['img'])
            return resolve({ newfiles });
        }
        if(Object.values(fildes).length && !Object.values(files).length){
           
          
           
            if (err) return rejact({ err });
            let newFildes = _(fildes, ["name","username","role"])
            return resolve({ newFildes });
        }
        else return rejact("911")
        

    });
  });

  let {newfiles ,newFildes } = await promes

  if(newfiles && !newFildes){
    if (Types.ObjectId.isValid(user)) {
        try {
          await db();
          let { image } = await Dataset.findById(user);
          if (!image) return res.status(402).send({ msg: "not Found imag" });
    
          let promesImg = new Promise(async (resolve, rejct) => {
            cloudinary.uploader.upload(
                newfiles.img.filepath,
              {
                public_id: image.public_id.split("/")[1].toString(),
                folder: "profile",
                overwrite: true,
                invalidate: true,
              },
              (errIMG, dataIMG) => {
                if (errIMG) return rejct({ errIMG });
                return resolve({ dataIMG });
              }
            );
          });
    
          let { errIMG, dataIMG } = await promesImg;
    
          if (errIMG) return res.status(405).send({ err: "err in Uploud" });
         await Dataset.findByIdAndUpdate(user ,
          {
            $set: { image: {url  : dataIMG.url , public_id : dataIMG.public_id } }
          },
          {new:true}
          )
    
    
          return res.status(200).send({ dataIMG });
        } catch (error) {
          return res.status(402).send("ID Nout Vield");
        }
      }

      return res.status(200).send("Error in ID image");
  }


  if (!newfiles && newFildes) return  res.status(402).send({fildes});




};
export const putOneEiftPofile = (req,res)=>{

}

export const getOne = async (req, res) => {
  let { user } = req.query;

  if (Object.keys(req.query).length && Types.ObjectId.isValid(user)) {
    await db();
    let data = await Skecma.findOne({ _id: user });
    if (!data) return res.status(402).send({ alkalde: "Not Found User" });
    return res.status(200).send({ data });
  } else return res.status(402).send({ alkalde: "not Viled info" });
};

export const removeOne = async (res) => {};
