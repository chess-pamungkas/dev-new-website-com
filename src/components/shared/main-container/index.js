import React from "react";
import CommonContext from "../../../context/common-context";
import { useContext } from "react";

const MainContainer = ({ children }) => {
  const { heightOffset } = useContext(CommonContext);

  return (
    <main
      style={{
        marginTop: `${heightOffset}px`,
      }}
      id="main-container"
    >
      {children}
    </main>
  );
};

export default MainContainer;
