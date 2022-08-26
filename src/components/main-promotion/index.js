import React, { useState, useContext } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ButtonLink from "../shared/button-link";
import { REGISTRATION_LINK } from "../../helpers/constants";
import TitlesAnimation from "../shared/titles-animation";
import { MarketingContext } from "../../context/marketing-context";
import {
  CONTENT_HEROES,
  SECT1_TEXT_SEQUENCES,
} from "../../helpers/marketing.config";
import { transformParamToKey } from "../../helpers/services/marketing-service";

const MainPromotion = ({ className }) => {
  const { t } = useTranslation();
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  const {content, sect1} = useContext(MarketingContext);

  const hero =
    CONTENT_HEROES[transformParamToKey(content)] || CONTENT_HEROES.default;

  const titles =
    SECT1_TEXT_SEQUENCES[transformParamToKey(sect1)] ||
    SECT1_TEXT_SEQUENCES.default;

  return (
    <section className={cn("main-promotion", className)}>
      <div className="main-promotion__person">
        <span className="main-promotion__name">{hero.name}</span>
        <span className="main-promotion__description">{hero.text}</span>
      </div>
      <div className="main-promotion__photo">
        <img src={hero.image} alt={hero.name} className="main-promotion__img" />
      </div>
      <div className="main-promotion__wrapper">
        <div className="main-promotion__block">
          <h1 className="main-promotion__title-wrapper">
            <span className="main-promotion__title">
              {/* A Perfectly optimised trading experience for */}
              {t('example')}
            </span>
            <span className="main-promotion__title main-promotion__title--big">
              <TitlesAnimation
                titles={titles}
                isAnimationFinished={isAnimationFinished}
                setIsAnimationFinished={setIsAnimationFinished}
              />
            </span>
          </h1>
          <ButtonLink
            link={REGISTRATION_LINK}
            className={cn({
              "button-link--snake-animation": isAnimationFinished,
            })}
          >
            {isAnimationFinished && (
              <>
                <span className="button-link--snake-animation-line-top" />
                <span className="button-link--snake-animation-line-left" />
                <span className="button-link--snake-animation-line-right" />
                <span className="button-link--snake-animation-line-bottom" />
              </>
            )}
            Trade now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default MainPromotion;
