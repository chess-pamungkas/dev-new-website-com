import { animated, useTransition, easings } from "react-spring";
import React, { useRef, useState } from "react";

const DEFAULT_WRAPPER_WIDTH = 90;
const DELAY_BEFORE_NEXT_KEYWORD = 2000;

const TypingAnimation = ({ keywords }) => {
  const buildChars = (str) => {
    return str.split("").map((item, i) => {
      return {
        key: i,
        char: item,
      };
    });
  };

  const wrapperRef = useRef(null);

  const [chars, setChars] = useState(buildChars(keywords[0]));
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [removeChars, setRemoveChars] = useState(false);
  const [wrapperRefWidth, setWrapperRefWidth] = useState(DEFAULT_WRAPPER_WIDTH);

  const transition = useTransition(chars, {
    from: {
      opacity: 0,
      config: {
        duration: 50,
      },
    },
    enter: [
      {
        opacity: 1,
        config: {
          duration: 100,
          easing: easings.linear,
        },
      },
    ],
    leave: {
      opacity: 0,
      config: {
        duration: 50,
      },
    },
    trail: 50,
    onRest: (result, spring, item) => {
      if (keywordIndex + 1 !== keywords.length) {
        if (!removeChars && item.key === chars.length - 1) {
          setWrapperRefWidth(wrapperRef.current.offsetWidth);
          setTimeout(() => {
            setRemoveChars(true);
            setChars(chars.slice(0, chars.length - 1));
          }, DELAY_BEFORE_NEXT_KEYWORD);
        }

        if (removeChars) {
          if (chars.length === 0) {
            setRemoveChars(false);
            setKeywordIndex(keywordIndex + 1);
            setChars(buildChars(keywords[keywordIndex + 1]));
            setWrapperRefWidth(DEFAULT_WRAPPER_WIDTH);
          } else {
            setChars(chars.slice(0, chars.length - 1));
          }
        }
      }
    },
  });

  return (
    <span
      style={{ display: "inline-block", minWidth: wrapperRefWidth + "px" }}
      ref={wrapperRef}
    >
      {transition((styles, item) => {
        return (
          <animated.span key={`typingAnimationKey${item.key}`} style={styles}>
            {item.char}
          </animated.span>
        );
      })}
    </span>
  );
};

export default TypingAnimation;
