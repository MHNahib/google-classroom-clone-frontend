import axios from "axios";

const setAccessToken = () => {
  const token = localStorage.getItem("token");
  if (token) axios.defaults.headers.common["x-auth-token"] = token;
  else axios.defaults.headers.common["x-auth-token"] = "";
};

export default setAccessToken;
