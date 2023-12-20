import React, { useContext } from "react";
import CommonContext from "../../../context/common-context";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";

const MainContainer = ({ children }) => {
  const { heightOffset } = useContext(CommonContext);
  const { isDesktop } = useWindowSize();

  return (
    <main id="main-container">
      <div
        style={{
          height: `${isDesktop ? heightOffset : 0}px`,
        }}
        className="header-offset-placeholder"
      />
      {children}
    </main>
  );
};

export default MainContainer;
