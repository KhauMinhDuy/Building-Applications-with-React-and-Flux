import React from "react";
import TextInput from "../common/TextInput";

const CourseForm = (props) => {
  // field
  const { course } = props;
  // function
  const { onChange, onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        id="title"
        label="Title"
        name="title"
        value={course.title}
        onChange={onChange}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={course.authorId || "1"}
            className="form-control"
            onChange={onChange}
          >
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>

      <TextInput
        id="category"
        label="Category"
        name="category"
        value={course.category}
        onChange={onChange}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

export default CourseForm;
