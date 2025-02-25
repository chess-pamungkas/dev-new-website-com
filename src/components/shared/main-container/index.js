import React, { useContext } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import CommonContext from "../../../context/common-context";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";

const MainContainer = ({ children }) => {
  const { heightOffset } = useContext(CommonContext);
  const { isDesktop, isTablet, isMobile } = useWindowSize();

  return (
    <main id="main-container">
      <div
        style={{
          height: `${isDesktop ? heightOffset : 0}px`,
        }}
        className="header-offset-placeholder"
      />
      <div className="container">{children}</div>
    </main>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainContainer;
