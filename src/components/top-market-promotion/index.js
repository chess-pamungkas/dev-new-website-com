import React from "react";
import cn from "classnames";
import ButtonLink from "../shared/button-link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Lottie from "lottie-react";

const TopMarketPromotion = ({
  className,
  children,
  note,
  image,
  btnClassName,
  btnTitle,
  link,
  isDocumentLink = false,
  isAnchorLink = false,
  isLottieImage = false,
  lottieStyle = {},
}) => {
  const getButton = () => {
    switch (true) {
      case isDocumentLink:
        return (
          <a
            className={cn(
              "button-link",
              "top-market-promotion__btn",
              btnClassName
            )}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {btnTitle}
          </a>
        );
      case isAnchorLink:
        return (
          <AnchorLink
            href={link}
            className={cn(
              "button-link",
              "button-link--red",
              "top-market-promotion__btn",
              btnClassName
            )}
          >
            {btnTitle}
          </AnchorLink>
        );

      default:
        return (
          <ButtonLink
            link={link}
            className={cn(
              "button-link--red",
              "top-market-promotion__btn",
              btnClassName
            )}
          >
            {btnTitle}
          </ButtonLink>
        );
    }
  };

  return (
    <section className={cn("top-market-promotion", className)}>
      <div className={cn("top-market-promotion__wrapper")}>
        <div className="top-market-promotion__block">
          <div className="top-market-promotion__description">
            <p className="top-market-promotion__text">{children}</p>
            {note && <p className="top-market-promotion__note">{note}</p>}
          </div>
          {btnTitle && getButton()}
        </div>
        {image && (
          <div
            className={cn(
              "top-market-promotion__block",
              "top-market-promotion__block--flexed"
            )}
          >
            {isLottieImage ? (
              <Lottie
                className="top-market-promotion__img--lottie"
                animationData={image}
                style={lottieStyle}
              />
            ) : (
              <img src={image} alt="" className="top-market-promotion__img" />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TopMarketPromotion;
