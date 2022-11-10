import React from "react";
import cn from "classnames";
import ButtonLink from "../shared/button-link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import { DIR_LTR, DIR_RTL } from "../../helpers/constants";

const TopMarket = ({
  className,
  children,
  title,
  isTitleUppercase = false,
  isChildrenHasSmallSize = false,
  image,
  btn1Title,
  link1,
  btn2Title,
  link2,
  subImageTemplate,
  isAnchorLink1 = false,
  isAnchorLink2 = false,
}) => {
  const isRTL = useRtlDirection();

  const getButton = (btnTitle, link, isAnchorLink, btnClassName) => {
    switch (true) {
      case isAnchorLink:
        return (
          <AnchorLink
            href={link}
            className={cn("button-link", "top-market__btn", btnClassName)}
          >
            {btnTitle}
          </AnchorLink>
        );

      default:
        return (
          <ButtonLink
            link={link}
            className={cn("top-market__btn", btnClassName)}
          >
            {btnTitle}
          </ButtonLink>
        );
    }
  };

  return (
    <section
      className={cn("top-market", className, {
        "top-market--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="top-market__wrapper">
        <div className="top-market__block">
          {title && (
            <h2
              className={cn("top-market__title", {
                "top-market__title--uppercase": isTitleUppercase,
              })}
            >
              {title}
            </h2>
          )}
          <div className="top-market__description">
            <p
              className={cn("top-market__text", {
                "top-market__text--small": isChildrenHasSmallSize,
              })}
            >
              {children}
            </p>
          </div>
          {(btn1Title || btn2Title) && (
            <div className="top-market__btn-wrapper">
              {btn1Title &&
                getButton(
                  btn1Title,
                  link1,
                  isAnchorLink1,
                  "top-market__btn--black"
                )}
              {btn2Title &&
                getButton(
                  btn2Title,
                  link2,
                  isAnchorLink2,
                  "top-market__btn--white"
                )}
            </div>
          )}
        </div>
        <div className={cn("top-market__block", "top-market__block--flexed")}>
          <img src={image} alt="" className="top-market__img" />
          {subImageTemplate && subImageTemplate}
        </div>
      </div>
    </section>
  );
};

export default TopMarket;
