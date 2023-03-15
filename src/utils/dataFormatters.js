export const formatImageData = (images) => {
  const formData = new FormData();

  images.forEach((current) => formData.append("images", current));

  return formData;
};

export const formatDate = (text) => {
  const [year, month, day] = text.split("T")[0].split("-");
  const [hour, minutes] = text.split("T")[1].split(":");

  return `${hour}:${minutes} - ${day}.${month}.${year}`;
};

export const queryBuilder = (data) => {
  let query = [];

  Object.entries(data).forEach(([k,v]) => {
    if(v !== "" && v !== "all"){
      query.push(`${k}="${v}"`);
    }
  });
  return encodeURIComponent(query.join('&'));
}