import axios from "axios";

const apiRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { apiRequest };
