import React from "react";
import cn from "classnames";
import InternalLink from "../internal-link";

const ButtonLink = ({ children, className, link }) => {
  if (String(link).startsWith("http") && String(link).includes("portal.")) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("button-link", className)}
      >
        {children}
      </a>
    );
  } else {
    return (
      <InternalLink to={link} className={cn("button-link", className)}>
        {children}
      </InternalLink>
    );
  }
};

export default ButtonLink;
