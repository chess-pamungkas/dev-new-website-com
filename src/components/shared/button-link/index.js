import React, { useContext } from "react";
import { Link } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import ClientResolverContext from "../../../context/client-resolver-context";
import { sendClickEventToGA } from "../../../helpers/services/google-analytics-service";

const ButtonLink = ({ children, className, link }) => {
  const {
    clientConfig: { banned },
  } = useContext(ClientResolverContext);
  if (String(link).startsWith("http")) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("button-link", className, {
          "button-link--disabled": banned,
        })}
        onClick={(e) => sendClickEventToGA(e)}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        to={link}
        className={cn("button-link", className, {
          "button-link--disabled": banned,
        })}
        onClick={(e) => sendClickEventToGA(e)}
      >
        {children}
      </Link>
    );
  }
};

export default ButtonLink;
