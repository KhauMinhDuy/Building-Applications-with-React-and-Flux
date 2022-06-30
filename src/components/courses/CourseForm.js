import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const CourseForm = (props) => {
  // field
  const { course, errors } = props;
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
        error={errors.title}
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
        {errors.authorId && (
          <div className="alert alert-danger">{errors.authorId}</div>
        )}
      </div>

      <TextInput
        id="category"
        label="Category"
        name="category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default CourseForm;
