import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseList from "./CourseList";
import courseStore from "../../stores/courseStore";
import * as courseAction from "../../actions/courseActions";

const CoursesPage = () => {
  const [courses, setCourses] = useState(courseStore.getCourses());

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) {
      courseAction.loadCourses();
    }
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link to={"/course"} className="btn btn-primary">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
};

export default CoursesPage;
