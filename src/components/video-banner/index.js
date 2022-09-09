import React from "react";
import cn from "classnames";

const VideoBanner = ({ className, video, title, subtitle }) => {
  return (
    <section className={cn("video-banner", className)}>
      <video className="video-banner__video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="video-banner__wrapper">
        <h2 className="video-banner__title">{title}</h2>
        <span className="video-banner__subtitle">{subtitle}</span>
      </div>
    </section>
  );
};

export default VideoBanner;
