import React from "react";
import CourseFormComponent from "../components/CourseFormComponent";
import Navbar from "../components/Navbar";

const CreateNewCoursePage = () => {
  return (
    <>
      <Navbar />
      <CourseFormComponent
        title={"Create new course"}
        data={""}
        buttonText={"Add"}
      />
    </>
  );
};

export default CreateNewCoursePage;
