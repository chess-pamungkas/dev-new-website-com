import React from "react";
import { animated } from "react-spring";
import cn from "classnames";
import ButtonLink from "../shared/button-link";

const Promotion = ({
  className,
  children,
  sectionRef,
  animationLeft,
  animationRight,
  textAnimationConfig,
  image,
  btnTitle,
  link,
  isReverseOrder = false,
  isRedPalette = false,
}) => {
  return (
    <section ref={sectionRef} className={cn("promotion", className)}>
      <div
        className={cn("promotion__wrapper", {
          "promotion__wrapper--reverse": isReverseOrder,
        })}
      >
        <div className="promotion__block">
          <div className="promotion__description">
            <animated.p style={textAnimationConfig} className="promotion__text">
              {children}
            </animated.p>
          </div>
          <ButtonLink
            link={link}
            className={cn("promotion__btn", {
              "promotion__btn--red": isRedPalette,
              "promotion__btn--black": !isRedPalette,
            })}
          >
            {btnTitle}
          </ButtonLink>
        </div>
        <div className={cn("promotion__block", "promotion__block--flexed")}>
          <img src={image} alt="" className="promotion__img" />
        </div>
      </div>
      <animated.div
        className={cn("promotion__bg", "promotion__bg--left")}
        style={animationLeft}
      />
      <div className="promotion__bg" />
      <animated.div
        className={cn("promotion__bg", "promotion__bg--right")}
        style={animationRight}
      />
    </section>
  );
};

export default Promotion;
