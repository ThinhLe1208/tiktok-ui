import axios from "axios";

// tạo instance thay thế cho api endpoint trong axios.get()
const request = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

// tạo 1 custom get call API bằng Axios và return trực tiếp data trong property data của Axios (nên không cần res.data.data)
export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};

export default request;
