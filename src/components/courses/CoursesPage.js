import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseList from "./CourseList";
import courseStore from "../../stores/courseStore";
import * as courseAction from "../../actions/courseActions";

const CoursesPage = () => {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) {
      courseAction.loadCourses();
    }
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

  return (
    <>
      <h2>Courses</h2>
      <Link to={"/course"} className="btn btn-primary">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={courseAction.deleteCourse} />
    </>
  );
};

export default CoursesPage;
