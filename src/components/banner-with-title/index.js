import React from "react";
import cn from "classnames";

const BannerWithTitle = ({ className, bgImage, title, subtitle }) => {
  return (
    <section
      className={cn("banner-with-title", className)}
      style={{
        backgroundImage: bgImage,
        backgroundPosition: "cover",
      }}
    >
      <div className="banner-with-title__wrapper">
        <h2 className="banner-with-title__title">{title}</h2>
        <span className="banner-with-title__subtitle">{subtitle}</span>
      </div>
    </section>
  );
};

export default BannerWithTitle;
