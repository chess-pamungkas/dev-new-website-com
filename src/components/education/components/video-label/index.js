import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";

const VideoLabel = ({ className, label }) => {
  const { t } = useTranslation();
  return <span className={cn("video-label", className)}>{t(label)}</span>;
};

export default VideoLabel;
