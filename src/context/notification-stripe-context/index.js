import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const NotificationStripeContext = createContext();

export const NotificationStripeProvider = ({ children }) => {
  const [expand, setExpand] = useState(true);

  return (
    <NotificationStripeContext.Provider
      value={{
        expand,
        setExpand,
      }}
    >
      {children}
    </NotificationStripeContext.Provider>
  );
};

NotificationStripeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default NotificationStripeContext;
