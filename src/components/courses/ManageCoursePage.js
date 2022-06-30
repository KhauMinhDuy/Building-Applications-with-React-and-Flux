import React, { useState } from "react";
import { toast } from "react-toastify";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import { saveCourse } from "../../api/courseApi";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  const handlerChange = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    saveCourse(course).then((response) => {
      props.history.push("/courses");
      toast.success("Course Saved.");
    });
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
