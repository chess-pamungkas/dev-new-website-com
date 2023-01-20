import React from "react";
import Lottie from "lottie-react";
import { useWindowSize } from "../../helpers/hooks/use-window-size";

export const StaticImages = ({ image, height, animation }) => {
  const { isMobile, isMD } = useWindowSize();

  let animationHeight = 300;
  if (isMobile) {
    animationHeight = 120;
  }
  if (isMD) {
    animationHeight = 200;
  }

  return (
    <div
      className="marketing-static-images"
      style={{ backgroundImage: `url(${image})`, height }}
    >
      <Lottie
        className="promotion-markets__svg"
        animationData={animation}
        style={{ height: animationHeight }}
      />
    </div>
  );
};

export default StaticImages;
