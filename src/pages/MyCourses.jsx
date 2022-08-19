import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { GetCoursesByTeachersId } from "../routes";
import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";

const MyCourses = () => {
  const token = localStorage.getItem("token");
  const user = jwt_decode(token);
  const [courses, setCourses] = useState([]);

  const getData = async () => {
    const response = await GetCoursesByTeachersId(user._id);
    if (response && response.isSuccess) {
      console.log(response.data.courses);
      setCourses(response.data.courses);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      {courses.length > 0 ? (
        courses.map((course) => <CourseCard course={course} />)
      ) : (
        <>No course found</>
      )}
    </>
  );
};

export default MyCourses;
