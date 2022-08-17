import axios from "axios";

// import apiUrl from "../config/api.config";
const apiUrl = `https://jsonplaceholder.typicode.com/`;

// get all the data
export const gateData = async (url) => {
  const baseUrl = apiUrl + url;
  console.log();
  const response = await axios.get(baseUrl);
  return response.data;
};
