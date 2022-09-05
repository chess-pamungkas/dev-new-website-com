import React from "react";
import cn from "classnames";
import ButtonLink from "../shared/button-link";

const TopMarketPromotion = ({
  className,
  children,
  note,
  image,
  btnTitle,
  link,
}) => {
  return (
    <section className={cn("top-market-promotion", className)}>
      <div className={cn("top-market-promotion__wrapper")}>
        <div className="top-market-promotion__block">
          <div className="top-market-promotion__description">
            <p className="top-market-promotion__text">{children}</p>
            <span className="top-market-promotion__note">{note}</span>
          </div>
          <ButtonLink
            link={link}
            className={cn("button-link--red", "top-market-promotion__btn")}
          >
            {btnTitle}
          </ButtonLink>
        </div>
        <div
          className={cn(
            "top-market-promotion__block",
            "top-market-promotion__block--flexed"
          )}
        >
          <img src={image} alt="" className="top-market-promotion__img" />
        </div>
      </div>
    </section>
  );
};

export default TopMarketPromotion;
