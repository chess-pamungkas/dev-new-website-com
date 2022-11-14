import React, { useCallback } from "react";
import cn from "classnames";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import VideoBlock from "../video-block";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  LG_MAX_WIDTH,
  MD_MAX_WIDTH,
  SM_MAX_WIDTH,
} from "../../../../helpers/constants";
import { useScreenWidth } from "./use-screen-width";
import {ArrowNext} from "../../../shared/icons";

const VideosCarousel = ({ className, videos }) => {
  const responsiveSettings = useScreenWidth();

  const CarouselNextArrow = (sliderProps) => {
    const { onClick } = sliderProps;
    return (
      <button onClick={onClick} className="videos-carousel__arrow">
        <ArrowNext className="videos-carousel__arrow-icon" />
      </button>
    );
  };

  const getSettings = useCallback(() => {
    return {
      dots: false,
      infinite: false,
      nextArrow: <CarouselNextArrow />,
      prevArrow: <></>,
      ...responsiveSettings.xl,
      responsive: [
        {
          breakpoint: LG_MAX_WIDTH,
          settings: responsiveSettings.lg,
        },
        {
          breakpoint: MD_MAX_WIDTH,
          settings: responsiveSettings.md,
        },
        {
          breakpoint: SM_MAX_WIDTH,
          settings: responsiveSettings.sm,
        },
      ],
    };
  }, [responsiveSettings]);

  return (
    <div className={cn("videos-carousel", className)}>
      {videos && (
        <Slider {...getSettings()}>
          {videos.map(({ snippet: video }) => (
            <VideoBlock
              key={`video-${stringTransformToKebabCase(video.title)}`}
              video={video}
            />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default VideosCarousel;
