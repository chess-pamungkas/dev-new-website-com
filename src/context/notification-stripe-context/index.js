import React, { createContext, useState } from "react";

const NotificationStripeContext = createContext();

// TODO: Remove it, it's not used anymore
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
