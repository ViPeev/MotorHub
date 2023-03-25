const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadImage = async (path, location) => {
  try {
   const images = await cloudinary.uploader.upload(path, {
      upload_preset: location,
    });
    return images;
  }catch(err){
    throw new Error("Image not uploaded successfully!");
  }
};

const deleteImage = async (id) => {
  return await cloudinary.api.delete_resources([id], (error, result) => {
    if (error) {
      throw new Error("Provided id is not correct!");
    }
    return result;
  });
};

module.exports = { cloudinary, deleteImage, uploadImage };
