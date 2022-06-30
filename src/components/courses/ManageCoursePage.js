import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../../api/courseApi";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
  }, [props.match.params.slug]);

  const handlerChange = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then((response) => {
      props.history.push("/courses");
      toast.success("Course Saved.");
    });
  };

  const formIsValid = () => {
    const _errors = {};
    if (!course.title) _errors.title = "title is required";
    if (!course.authorId) _errors.authorId = "authorId is required";
    if (!course.category) _errors.category = "category is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  };

  return (
    <>
      <h2>Manage Course</h2>
      {/* <Prompt when={true} message="Are you sure you want to leave" /> */}
      <CourseForm
        errors={errors}
        course={course}
        onChange={handlerChange}
        onSubmit={handlerSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
