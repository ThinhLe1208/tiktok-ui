import axios from "axios";

// tạo instance thay thế cho api endpoint trong axios.get()
const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// tạo 1 custom get call API bằng Axios và return trực tiếp data trong property data của Axios (nên không cần res.data.data)
export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
};

export default httpRequest;
