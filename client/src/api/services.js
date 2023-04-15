import { formatImageData } from "../utils/dataFormatters";
import { updateUserData } from "../utils/localStorage";
import {
  createCar,
  uploadImages,
  editCar,
  updateUser,
  uploadPhoto,
} from "./data";

export async function submitCar(formData) {
  const filtered = formData.images.filter((i) => i).slice(0, 10);

  let URLs = [];
  if (filtered.length > 0) {
    const imageURLs = await uploadImages(formatImageData(filtered));
    URLs = imageURLs.images;
  }

  const data = { ...formData, images: URLs };
  const { _id } = await createCar(data);

  return _id;
}

export async function submitEditCar(id, formData) {
  const filtered = formData.images.filter((i) => i).slice(0, 10);
  
  if (filtered.length > 0) {
    const fileIndexes = [];
    
    filtered.forEach((image, index) => {
      if (typeof image !== "string") {
        fileIndexes.push(index);
      }
    });

    const files = filtered.filter((i) => typeof i !== "string");

    if (files.length > 0) {
      const imageURLs = await uploadImages(formatImageData(files));
      imageURLs.images.forEach((url, index) => {
        filtered[fileIndexes[index]] = url;
      });
    }
  }

  const data = { ...formData, images: filtered };
  const { _id } = await editCar(id, data);

  return _id;
}

export async function submitProfilePhoto(file) {
  const formData = new FormData();
  formData.append("image", file);

  const imageURL = await uploadPhoto(formData);
  await updateUser(imageURL);
  updateUserData(imageURL.image);
}
