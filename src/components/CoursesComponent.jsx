import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { GetAllCourses } from "../routes";

const CoursesComponent = () => {
  const [courses, setCourses] = useState([]);

  const getData = async () => {
    const response = await GetAllCourses();
    if (response && response.isSuccess) {
      console.log(response.data.courses);
      setCourses(response.data.courses);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {courses.length > 0 ? (
        courses.map((course) => <CourseCard course={course} />)
      ) : (
        <>No course found</>
      )}
    </div>
  );
};
export default CoursesComponent;
