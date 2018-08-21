// SurveyField contains logic to render a single
// label and text input

import React from "react";

// meta property contains the error (from validation) that
// is passed by reduxForm
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label htmlFor={input.name}>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
