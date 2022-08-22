import React, { useContext } from "react";
import { Link } from "gatsby";
import cn from "classnames";
import ClientResolverContext from '../../../context/client-resolver-context';

const ButtonLink = ({ children, className, link }) => {
  const {
    clientConfig: { banned },
  } = useContext(ClientResolverContext);

  return (
    <Link
      to={link}
      className={cn("button-link", className, {
        "button-link--disabled": banned,
      })}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
