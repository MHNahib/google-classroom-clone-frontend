import { getData, postData, putData } from "../services/api/apiCall";

// login
export const Login = (data) => postData("login", data);
export const Signup = (data) => postData("singup", data);
