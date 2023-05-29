import React, { useContext } from "react";
import cn from "classnames";
import ClientResolverContext from "../../../context/client-resolver-context";
import { sendClickEventToGA } from "../../../helpers/services/google-analytics-service";
import InternalLink from "../internal-link";

const ButtonLink = ({ children, className, link, ignoreDisabling }) => {
  const {
    clientConfig: { banned },
  } = useContext(ClientResolverContext);
  if (String(link).startsWith("http") && String(link).includes("my.")) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("button-link", className, {
          "button-link--disabled": banned && !ignoreDisabling,
        })}
        onClick={(e) => sendClickEventToGA(e)}
      >
        {children}
      </a>
    );
  } else {
    return (
      <InternalLink
        to={link}
        className={cn("button-link", className, {
          "button-link--disabled": banned && !ignoreDisabling,
        })}
        // onClick={(e) => sendClickEventToGA(e)}
      >
        {children}
      </InternalLink>
    );
  }
};

export default ButtonLink;
