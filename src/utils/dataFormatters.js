export const formatImageData = (images) => {
  const formData = new FormData();

  images
    .filter((i) => i)
    .forEach((current) => formData.append("images", current));

  return formData;
};

export const formatFormData = (data) => {
  const formData = new FormData();
  console.log(data);
  Object.keys(data).forEach(key => formData.append(key,data[key]));
  return formData;
};
