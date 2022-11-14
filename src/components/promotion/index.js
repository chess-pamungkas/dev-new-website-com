import React from "react";
import { animated } from "react-spring";
import cn from "classnames";
import ButtonLink from "../shared/button-link";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import {DIR_LTR, DIR_RTL} from "../../helpers/constants";

const Promotion = ({
  className,
  children,
  sectionRef,
  bgAnimationConfig,
  textAnimationConfig,
  image,
  btnTitle,
  link,
  isReverseOrder = false,
  isRedPalette = false,
}) => {
  const isRTL = useRtlDirection();

  return (
    <section
      ref={sectionRef}
      className={cn("promotion", className, {
        "promotion--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
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
      {bgAnimationConfig ? (
        <animated.div
          className={cn("promotion__bg")}
          style={bgAnimationConfig}
        />
      ) : (
        <div className="promotion__bg" />
      )}
    </section>
  );
};

export default Promotion;
