import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
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

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
};
export default ButtonLink;
