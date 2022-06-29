import React, { useState } from "react";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import { saveCourse } from "../../api/courseApi";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({});

  const handlerChange = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    saveCourse(course);
  };

  return (
    <>
      <h2>Manage Course</h2>
      {/* <Prompt when={true} message="Are you sure you want to leave" /> */}
      <CourseForm
        course={course}
        onChange={handlerChange}
        onSubmit={handlerSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
