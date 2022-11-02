import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { MAIN_VIDEO } from "../../../../helpers/education.config";
import TopMarketPromotion from "../../../top-market-promotion";

const MainEducationVideo = () => {
  const { t } = useTranslation();
  return (
    <TopMarketPromotion
      className={cn("black-promotion", "black-promotion--education")}
      image={MAIN_VIDEO.url}
      isVideo
      note={
        <>
          <span>{t(MAIN_VIDEO.description)}</span>
          {MAIN_VIDEO.labels.map((label) => (
            <span key={`main-video-label-${t(label)}`}>{t(label)}</span>
          ))}
        </>
      }
    >
      {t(MAIN_VIDEO.title)}
    </TopMarketPromotion>
  );
};

export default MainEducationVideo;
