import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((_saveCourse) => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: _saveCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((_courses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: _courses,
    });
  });
}
