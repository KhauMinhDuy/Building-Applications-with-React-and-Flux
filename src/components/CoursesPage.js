import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { getCourses } from "../api/courseApi";

const CoursesPage = (prop) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((coursesResponse) => {
      setCourses(coursesResponse);
    });
  }, []);

  const renderRow = (course) => {
    return (
      <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  };

  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{courses.map((course) => renderRow(course))}</tbody>
      </table>
    </>
  );
};

export default CoursesPage;
