import axios from "axios";

// tạo instance thay thế cho api endpoint trong axios.get()
const request = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

// tạo 1 custom get sẽ return reponse.data (nên khi .then không còn res.data.data)
export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};

export default request;
