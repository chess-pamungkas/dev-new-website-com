import React, { useContext } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import CommonContext from "../../../context/common-context";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";

const MainContainer = ({ children }) => {
  const { heightOffset } = useContext(CommonContext);
  const { isDesktop, isTablet, isMobile } = useWindowSize();

  // Separate children that should be excluded from container
  const containerChildren = [];
  const excludedChildren = [];

  React.Children.forEach(children, (child) => {
    if (child && child.props && child.props.excludeFromContainer) {
      // Remove the excludeFromContainer prop before rendering
      const { excludeFromContainer, ...childProps } = child.props;
      excludedChildren.push(React.cloneElement(child, childProps));
    } else {
      containerChildren.push(child);
    }
  });

  return (
    <main id="main-container">
      <div
        style={{
          height: `${isDesktop ? heightOffset : 0}px`,
        }}
        className="header-offset-placeholder"
      />
      {/* Render excluded components outside container */}
      {excludedChildren}
      {/* Render other components inside container */}
      <div className="container">{containerChildren}</div>
    </main>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainContainer;
