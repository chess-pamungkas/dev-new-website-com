import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import { modifyInternalLinkForLP } from "../../../helpers/services/modify-internal-links";

const InternalLink = ({ children, className, to }) => {
  to = modifyInternalLinkForLP(to);

  if (String(to).startsWith("http")) {
    return (
      <a href={to} className={cn(className)}>
        {children}
      </a>
    );
  } else {
    return (
      <Link to={to} className={cn(className)}>
        {children}
      </Link>
    );
  }
};

export default InternalLink;
