import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";
import Dataset from "../../model/userModel";
import c_db from "../../lib/connectDB";
import _ from "lodash";

export const ConfCloud = ()=>cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRER,
  secure: true,
});
ConfCloud()

const form = new formidable.IncomingForm({
  keepExtensions: true,
});

export const formResult = async (req, res) =>
  await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      let sort = [fields].sort((e) => e);
      let piceFields = _.pick(...sort, [
        "fristname",
        "email",
        "username",
        "password",
      ]);
      let piceFiles = _.pick(files, ["image"]);

      if (err) reject(err);
      if (piceFields && piceFiles) {
        resolve({ piceFields, piceFiles });
      } else res.status(501).send({ msg: "error signup filed data" });
    });
  });

export const uploudImg = async (res, files) => {

  return await cloudinary.uploader.upload(
    files.image.filepath,
    {
      folder: "profile",
    },
    (err, result) => {
      if (err) return res.status(500).send(err);
      return result;
    }
  );
};

export const addUser = async (res, files, fields) => {
  try {
    await c_db();
    let find_em = await Dataset.findOne({ email: fields.email });
    let find_us = await Dataset.findOne({ email: fields.username });
    if (!find_us && !find_em) {
      console.log("Start");
    let { public_id, url } = await uploudImg(res, files);

    let User = new Dataset({
      fristname: fields.fristname,
      email: fields.email,
      password: fields.password,
      username: fields.username,
      image: {
        public_id: public_id,
        url: url,
      },
    });
    User.save()

    return res.status(200).json({ done: "create User" });




    } else {
      if (find_us && find_em)
        return res
          .status(300)
          .json({ username: "أسم المستخدم ليس متاح", email: " الأيميل غير متاح " });
      if (find_us)
        return res.status(300).json({ username: "أسم المستخدم ليس متاح" });
      if (find_em) return res.status(300).json({ email: " الأيميل غير متاح " });
      return res.status(300).json({ mss: "خطا في التسجيل " });
    }
  } catch (error) {
    return res.status(300).json({ mss: error.message });
  }
};
