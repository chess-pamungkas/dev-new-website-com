import React from "react";
import cn from "classnames";
import { animated } from "react-spring";

const PlatformBlock = ({ className, icon, title, animationStyle }) => {
  return (
    <animated.div
      style={animationStyle}
      className={cn("platform-block", className)}
    >
      <img src={icon} alt={title} className="platform-block__img" />
    </animated.div>
  );
};

export default PlatformBlock;
