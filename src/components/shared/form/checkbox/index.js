import React from "react";
import ErrorMessage from "../error-message";
import cn from "classnames";

const Checkbox = ({
  title,
  note,
  text,
  name,
  value,
  isError,
  errorMessage,
  ...props
}) => {
  return (
    <div className={cn("input-wrapper")}>
      {title && <span className="input-title">{title}</span>}
      {note && <span className="input-note">{note}</span>}
      <div className="checkbox-wrapper">
        <input
          className="input-checkbox"
          type="checkbox"
          name={name}
          value={value}
          {...props}
        />
        <p className="checkbox-text">{text}</p>
      </div>
      {isError && <ErrorMessage text={errorMessage} />}
    </div>
  );
};

export default Checkbox;
