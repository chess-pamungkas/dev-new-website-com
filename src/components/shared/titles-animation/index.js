import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import {
  TITLES_ANIMATION_DEFAULT_FROM_CONFIG,
  TITLES_ANIMATION_DEFAULT_TO_STEP_1_CONFIG,
  TITLES_ANIMATION_DEFAULT_TO_STEP_2_CONFIG,
} from "../../../helpers/animation.config";

const TitlesAnimation = ({
  titles,
  isAnimationFinished,
  setIsAnimationFinished,
  children,
  isChildrenAnimation,
  animationToStep1Config,
  animationToStep2Config,
}) => {
  const { t } = useTranslationWithVariables();

  const [activeItem, setActiveItem] = useState(
    isChildrenAnimation ? React.Children.toArray(children[0]) : t(titles[0])
  );
  const [items, setItems] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isChildrenAnimation && children?.length) {
      setItems(React.Children.toArray(children));
    }

    if (titles?.length) {
      setItems(titles);
    }
  }, [isChildrenAnimation, titles, children]);

  const animationStyles = useSpring({
    loop: true,
    from: TITLES_ANIMATION_DEFAULT_FROM_CONFIG,
    to: [
      animationToStep1Config || TITLES_ANIMATION_DEFAULT_TO_STEP_1_CONFIG,
      {
        ...(animationToStep2Config ||
          TITLES_ANIMATION_DEFAULT_TO_STEP_2_CONFIG),
        onRest: () => {
          if (index < items.length - 1) {
            setActiveItem(
              isChildrenAnimation ? items[index + 1] : t(items[index + 1])
            );
            setIndex(index + 1);
          }

          if (index === items.length - 2) {
            setActiveItem(
              isChildrenAnimation
                ? items[items.length - 1]
                : t(items[titles.length - 1])
            );
            setIsAnimationFinished(true);
          }
        },
      },
    ],
  });

  return isAnimationFinished ? (
    activeItem
  ) : (
    <animated.div style={animationStyles}>{activeItem}</animated.div>
  );
};

export default TitlesAnimation;
