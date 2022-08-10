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
}) => {
  return (
    <section
      className={cn("promotion", className)}
      style={{ background: `url(${bgImage}) no-repeat` }}
    >
      <div
        className={cn("promotion__wrapper", {
          "promotion__wrapper--reverse": isReverseOrder,
        })}
      >
        <div className="promotion__block">
          <div>{children}</div>
          <ButtonLink link={link}>{btnTitle}</ButtonLink>
        </div>
        <div className="promotion__block">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Promotion;
