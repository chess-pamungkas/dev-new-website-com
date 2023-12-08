import React from "react";
import cn from "classnames";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";

const VideoLabel = ({ className, label }) => {
  const { t } = useTranslationWithVariables();
  return <span className={cn("video-label", className)}>{t(label)}</span>;
};

export default VideoLabel;
