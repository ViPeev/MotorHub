export const formatImageData = (images) => {
  const formData = new FormData();

  images.forEach((current) => formData.append("images", current));

  return formData;
};

export const formatFormData = (data) => {
  const formData = new FormData();

  Object.keys(data).forEach(key => formData.append(key,data[key]));
  return formData;
};
