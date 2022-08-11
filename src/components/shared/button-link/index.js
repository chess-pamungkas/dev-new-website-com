import React from "react";
import { Link } from "gatsby";
import cn from "classnames";

const ButtonLink = ({ children, className, link }) => {
  return (
    <Link to={link} className={cn("button-link", className)}>
      {children}
    </Link>
  );
};

export default ButtonLink;
