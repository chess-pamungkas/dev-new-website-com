import React from "react";
import cn from "classnames";
import ButtonLink from "../shared/button-link";

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
}) => {
  return (
    <section className={cn("top-market", className)}>
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
              {btn1Title && (
                <ButtonLink
                  link={link1}
                  className={cn("top-market__btn", "top-market__btn--black")}
                >
                  {btn1Title}
                </ButtonLink>
              )}
              {btn2Title && (
                <ButtonLink
                  link={link2}
                  className={cn("top-market__btn", "top-market__btn--white")}
                >
                  {btn2Title}
                </ButtonLink>
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
