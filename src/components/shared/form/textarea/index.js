import React from "react";
import ErrorMessage from "../error-message";

const Textarea = ({ title, name, value, isError, errorMessage, ...props }) => {
  const ROWS_COUNT = 4;
  return (
    <div className="input-wrapper">
      {title && <span className="input-title">{title}</span>}
      <textarea
        className="input textarea"
        name={name}
        value={value}
        rows={ROWS_COUNT}
        {...props}
      />
      {isError && <ErrorMessage text={errorMessage} />}
    </div>
  );
};

export default Textarea;
