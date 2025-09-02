import React from "react";
import PropTypes from "prop-types";
import LottieWrapper from "../shared/lottie-wrapper";
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
      <LottieWrapper
        className="promotion-markets__svg"
        animationData={animation}
        style={{ height: animationHeight }}
      />
    </div>
  );
};

StaticImages.propTypes = {
  image: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  animation: PropTypes.object.isRequired,
};
export default StaticImages;
