import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import cn from "classnames";
import ButtonLink from "../shared/button-link";
import { useIntersectionObserver } from "../../helpers/hooks/use-intersection-observer";

const Promotion = ({
  className,
  children,
  image,
  btnTitle,
  link,
  isReverseOrder = false,
  isRedPalette = false,
}) => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  });

  const animationConfig = useSpring({
    config: { duration: 700 },
    from: { opacity: 0, left: "100%" },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      left: dataRef?.isIntersecting ? "0" : "100%",
    },
  });

  return (
    <section className={cn("promotion", className)}>
      <div
        className={cn("promotion__wrapper", {
          "promotion__wrapper--reverse": isReverseOrder,
        })}
      >
        <div className="promotion__block">
          <div className="promotion__description">
            <p className="promotion__text">{children}</p>
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
      <div>
        <animated.div className="promotion__bg" style={animationConfig} />
        <div ref={triggerRef} />
      </div>
    </section>
  );
};

export default Promotion;
