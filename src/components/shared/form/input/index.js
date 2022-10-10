import React from "react";
import ErrorMessage from "../error-message";
import cn from "classnames";

const Input = ({
  type,
  title,
  name,
  value,
  isError,
  errorMessage,
  isHalfWidth = false,
  ...props
}) => {
  return (
    <div className={cn("input-wrapper", {
      "input-wrapper--half-width": isHalfWidth
    })}>
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
