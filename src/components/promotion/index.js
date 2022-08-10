import React from "react";
import cn from "classnames";
import ButtonLink from "../shared/button-link";

const Promotion = ({
  className,
  children,
  bgImage,
  image,
  btnTitle,
  link,
  isReverseOrder = false,
  isRedPalette = false,
}) => {
  return (
    <section
      className={cn("promotion", className)}
      style={{
        background: `url(${bgImage}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
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
    </section>
  );
};

export default Promotion;
