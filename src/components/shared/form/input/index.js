import React from "react";
import ErrorMessage from "../error-message";

const Input = ({
  type,
  title,
  name,
  value,
  isError,
  errorMessage,
  ...props
}) => {
  return (
    <div className="input-wrapper">
      {title && <span className="input-title">{title}</span>}
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        {...props}
      />
      {isError && <ErrorMessage text={errorMessage} />}
    </div>
  );
};

export default Input;
