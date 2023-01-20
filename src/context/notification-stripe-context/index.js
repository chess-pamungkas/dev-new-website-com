import React, { createContext, useState } from "react";

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

export default NotificationStripeContext;
