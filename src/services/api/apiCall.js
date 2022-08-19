import axios from "axios";

import { API_URL } from "./config";
import setAccessToken from "./setAccessToken";

export const getData = async (path) => {
  try {
    setAccessToken();
    const response = await axios.get(`${API_URL}${path}`);
    const { data } = response;
    return {
      isSuccess: data.isSuccess,
      statusCode: data.status,
      data: data.data,
      message: data.message,
    };
  } catch (error) {
    return {
      isSuccess: false,
      statusCode: error.response ? error.response.status : null,
      data: null,
      message: error.message,
    };
  }
};

export const postData = async (path, data) => {
  try {
    setAccessToken();
    const response = await axios.post(`${API_URL}${path}`, data);
    return {
      data: response.data.data,
      isSuccess: true,
      status: response.status,
    };
  } catch (error) {
    console.log(error);
    return {
      data: error.response ? error.response.data.data : null,
      isSuccess: false,
      status: error.response ? error.response.status : null,
      message: error.response ? error.response.data.message : null,
    };
  }
};

export const putData = async (path, data) => {
  try {
    setAccessToken();
    const response = await axios.put(`${API_URL}${path}`, data);
    return {
      data: response.data.data,
      isSuccess: true,
      status: response.status,
    };
  } catch (error) {
    console.log(error);
    return {
      data: error.response ? error.response.data.data : null,
      isSuccess: false,
      status: error.response ? error.response.status : null,
      message: error.response ? error.response.data.message : null,
    };
  }
};
