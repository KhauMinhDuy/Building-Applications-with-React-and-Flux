import React, { useState } from "react";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({});

  const handlerChange = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h2>Manage Course</h2>
      {/* <Prompt when={true} message="Are you sure you want to leave" /> */}
      <CourseForm course={course} onChange={handlerChange} />
    </>
  );
};

export default ManageCoursePage;
