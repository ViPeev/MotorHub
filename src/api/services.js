import { formatImageData } from "../utils/dataFormatters";
import { createCar, uploadImages, editCar } from "./data";

export async function submitCar(formData) {
  const filtered = formData.images.filter((i) => i);

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
  const fileIndexes = [];
  const filtered = formData.images.filter((i) => i);

  if (filtered.length > 0) {
    filtered.forEach((image, index) => {
      if (typeof image !== "string") {
        fileIndexes.push(index);
      }
    });

    const files = filtered.filter((i) => typeof i !== "string");

    const imageURLs = await uploadImages(formatImageData(files));

    imageURLs.images.forEach((url, index) => {
      filtered[fileIndexes[index]] = url;
    });
  }

  const data = { ...formData, images: filtered };
  const { _id } = await editCar(id, data);

  return _id;
}
