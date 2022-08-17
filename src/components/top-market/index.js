import React from "react";
import cn from "classnames";
import ButtonLink from "../shared/button-link";

const TopMarket = ({
  className,
  children,
  title,
  image,
  btn1Title,
  link1,
  btn2Title,
  link2,
}) => {
  return (
    <section className={cn("top-market", className)}>
      <div className={"top-market__wrapper"}>
        <div className="top-market__block">
          <h2 className="top-market__title">{title}</h2>
          <div className="top-market__description">
            <p className="top-market__text">{children}</p>
          </div>
          <div className="top-market__btn-wrapper">
            <ButtonLink
              link={link1}
              className={cn("top-market__btn", "top-market__btn--black")}
            >
              {btn1Title}
            </ButtonLink>
            <ButtonLink
              link={link2}
              className={cn("top-market__btn", "top-market__btn--white")}
            >
              {btn2Title}
            </ButtonLink>
          </div>
        </div>
        <div className={cn("top-market__block", "top-market__block--flexed")}>
          <img src={image} alt="" className="top-market__img" />
        </div>
      </div>
    </section>
  );
};

export default TopMarket;
