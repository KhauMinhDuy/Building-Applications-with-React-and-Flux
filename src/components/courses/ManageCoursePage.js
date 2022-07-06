import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import courseStore from "../../stores/courseStore";
import * as courseAction from "../../actions/courseActions";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseAction.loadCourses();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [props.match.params.slug, courses.length]);

  const handlerChange = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid()) return;
    courseAction.saveCourse(course).then((response) => {
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
