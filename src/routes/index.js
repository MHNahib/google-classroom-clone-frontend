import { getData, postData, putData } from "../services/api/apiCall";

// login
export const Login = (data) => postData("login", data);
export const Signup = (data) => postData("singup", data);

// coruse
export const GetAllCourses = () => getData("course/all");
export const GetCoursesByTeachersId = (id) => getData(`course/teacher/${id}`);
export const CreateCourses = (data) => postData("course/create", data);
