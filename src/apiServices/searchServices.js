import * as request from "~/utils/request";

/**
 * @param {string} q query: từ khóa tìm kiếm
 * @param {string} type 'less': api trả về dưới 5 kết quả, 'more': api trả về dưới 10 kết quả
 * @return response api data
 */
export const search = async (q, type = "less") => {
  try {
    const res = await request.get(`users/search`, {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
