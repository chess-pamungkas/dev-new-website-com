import React, { useCallback } from "react";
import cn from "classnames";
import ReactPlayer from "react-player/youtube";
import { YOUTUBE_VIDEO_SHARE_LINK } from "../../../../helpers/constants";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";

const VideoBlock = ({ className, video }) => {
  const { isMobile, isMD, isLG, isXL } = useWindowSize();

  const getVideoStyles = useCallback(() => {
    switch (true) {
      case isXL:
        return { width: "359px", height: "202px" };
      case isLG:
        return { width: "359px", height: "202px" };
      case isMD:
        return { width: "274px", height: "155px" };
      case isMobile:
        return { width: "150px", height: "85px" };
      default:
        return { width: "359px", height: "202px" };
    }
  }, [isMobile, isMD, isLG, isXL]);

  const getYoutubeLink = (videoId) =>
    [YOUTUBE_VIDEO_SHARE_LINK, videoId].join("");

  return (
    <div className={cn("video-block", className)}>
      <ReactPlayer
        url={getYoutubeLink(video.resourceId.videoId)}
        config={{
          youtube: {
            playerVars: {
              origin: window.location.hostname,
            },
          },
        }}
        {...getVideoStyles()}
      />
      <p className="video-block__title">{video.title}</p>
      <p className="video-block__description">{video.description}</p>
    </div>
  );
};

export default VideoBlock;
