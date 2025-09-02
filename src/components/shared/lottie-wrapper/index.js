import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Dynamic import untuk lottie-react hanya di client-side
const LottieWrapper = ({ animationData, style, className, ...props }) => {
  const [LottieComponent, setLottieComponent] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true after component mounts (client-side)
    setIsClient(true);

    // Dynamic import lottie-react only on client-side
    import("lottie-react").then((module) => {
      setLottieComponent(() => module.default);
    });
  }, []);

  // Return null during SSR or while loading
  if (!isClient || !LottieComponent) {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: style?.height || "200px",
        }}
      >
        {/* Placeholder during loading */}
        <div style={{ opacity: 0.3 }}>Loading animation...</div>
      </div>
    );
  }

  // Render Lottie component only on client-side
  return (
    <LottieComponent
      animationData={animationData}
      style={style}
      className={className}
      {...props}
    />
  );
};

LottieWrapper.propTypes = {
  animationData: PropTypes.object.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LottieWrapper;
