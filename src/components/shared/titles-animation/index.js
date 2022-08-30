import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { useTranslation } from "gatsby-plugin-react-i18next";

const TitlesAnimation = ({
  titles,
  isAnimationFinished,
  setIsAnimationFinished,
}) => {
  const [index, setIndex] = useState(0);

  const { t } = useTranslation();

  const animationStyles = useSpring({
    loop: true,
    from: { opacity: 0, top: "-40px", position: "relative" },
    to: [
      {
        opacity: 1,
        top: "0",
        config: {
          duration: 150,
        },
      },
      {
        opacity: 0,
        top: "40px",
        config: {
          duration: 150,
        },
        delay: 2000,
        onRest: () => {
          if (index < titles.length - 1) {
            setIndex(index + 1);
          }

          if (index === titles.length - 2) {
            setIsAnimationFinished(true);
          }
        },
      },
    ],
  });

  return isAnimationFinished ? (
    titles[titles.length - 1]
  ) : (
    <animated.div style={animationStyles}>{t(titles[index])}</animated.div>
  );
};

export default TitlesAnimation;
