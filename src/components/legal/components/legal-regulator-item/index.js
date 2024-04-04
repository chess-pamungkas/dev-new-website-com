import React from "react";
import cn from "classnames";
import HighlightedLocalizationText from "../../../shared/highlighted-localization-text";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import AnchorLink from "react-anchor-link-smooth-scroll";

const LegalRegulatorItem = ({
  className,
  icon,
  title,
  titleAccent,
  text,
  anchorLink,
}) => {
  const { t } = useTranslationWithVariables();
  console.log(anchorLink);
  return (
    <div className={cn("legal-regulator-item", className)}>
      <img src={icon} alt="" className="legal-regulator-item__icon" />
      <p className="legal-regulator-item__title">
        <HighlightedLocalizationText
          localizationText={title}
          wordsToHighlight={titleAccent}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </p>
      <p className="legal-regulator-item__text">{t(text)}</p>
      {/* <a
        className="legal-regulator-item__link"
        href={"/"}
        target="_blank"
        rel="noreferrer"
      >
        {t("legal-regulator-read-more-fsa")}
      </a> */}
      <AnchorLink href={anchorLink} className={"legal-regulator-item__link"}>
        {t("legal-regulator-read-more-fsa")}
      </AnchorLink>
    </div>
  );
};

export default LegalRegulatorItem;
