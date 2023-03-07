import React, { useState, useContext } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ButtonLink from "../shared/button-link";
import { GetRegistrationLink } from "../../helpers/constants";
import TitlesAnimation from "../shared/titles-animation";
import { MarketingContext } from "../../context/marketing-context";
import {
  CONTENT_HEROES,
  SECT1_TEXT_SEQUENCES,
  CYSEC_DEFAULT_TEXT_SEQUENCE,
  FSA_DEFAULT_TEXT_SEQUENCE,
} from "../../helpers/marketing.config";
import { transformParamToKey } from "../../helpers/services/marketing-service";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import { useEntityPostfix } from "../../helpers/use-entity-postfix";

const MainPromotion = ({ className, isShowHero = true }) => {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  const { t } = useTranslation();
  const { content, sect1 } = useContext(MarketingContext);
  const isRTL = useRtlDirection();
  const { isCySEC } = useEntityPostfix();
  const DEFAULT_TEXT_SEQUENCE = isCySEC
    ? CYSEC_DEFAULT_TEXT_SEQUENCE
    : FSA_DEFAULT_TEXT_SEQUENCE;

  const hero =
    CONTENT_HEROES[transformParamToKey(content)] || CONTENT_HEROES.default;

  const titles =
    SECT1_TEXT_SEQUENCES[transformParamToKey(sect1)] || DEFAULT_TEXT_SEQUENCE;

  return (
    <section
      className={cn("main-promotion", className, {
        "main-promotion--rtl": isRTL,
      })}
    >
      {isShowHero && (
        <>
          <div className="main-promotion__person">
            <span className="main-promotion__name">{t(hero.name)}</span>
            <span className="main-promotion__description">{t(hero.text)}</span>
          </div>
          <div className="main-promotion__photo">
            <img
              src={hero.image}
              alt={hero.name}
              className="main-promotion__img"
            />
          </div>
        </>
      )}
      <div
        className={cn("main-promotion__wrapper", {
          "main-promotion__wrapper--without-hero": !isShowHero,
        })}
      >
        <div className="main-promotion__block">
          <h1 className="main-promotion__title-wrapper">
            <span className="main-promotion__title">
              {t("index_main-promotion-title")}
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
            link={GetRegistrationLink()}
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
            {t("button-trade-now")}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default MainPromotion;
