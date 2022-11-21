import React from "react";
import cn from "classnames";
import ButtonLink from "../shared/button-link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Lottie from "lottie-react";
import ReactPlayer from "react-player";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";

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
  isVideo = false,
  videoSettings = {},
  lottieStyle = {},
  content,
}) => {
  const isRTL = useRtlDirection();

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

  const getImage = () => {
    switch (true) {
      case isVideo:
        return <ReactPlayer url={image} {...videoSettings} />;
      case isLottieImage:
        return (
          <Lottie
            className="top-market-promotion__img--lottie"
            animationData={image}
            style={lottieStyle}
          />
        );
      default:
        return <img src={image} alt="" className="top-market-promotion__img" />;
    }
  };

  return (
    <section
      className={cn("top-market-promotion", className, {
        "top-market-promotion--rtl": isRTL,
      })}
    >
      <div className={cn("top-market-promotion__wrapper")}>
        <div className="top-market-promotion__block">
          <div className="top-market-promotion__description">
            <p className="top-market-promotion__text">{children}</p>
            {note && <p className="top-market-promotion__note">{note}</p>}
          </div>
          {btnTitle && getButton()}
          {content && <div className="top-market-promotion__content">{content}</div>}
        </div>
        {image && (
          <div
            className={cn(
              "top-market-promotion__block",
              "top-market-promotion__block--flexed"
            )}
          >
            {getImage()}
          </div>
        )}
      </div>
    </section>
  );
};

export default TopMarketPromotion;
