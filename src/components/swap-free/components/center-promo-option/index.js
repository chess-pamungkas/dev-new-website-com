import React from "react";
import cn from "classnames";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import HighlightedLocalizationText from "../../../shared/highlighted-localization-text";
import { useTranslation } from "gatsby-plugin-react-i18next";

const CenterPromoOption = ({ img, title, titleAccent, text, btnTitle }) => {
  const isRTL = useRtlDirection();
  const { t } = useTranslation();

  const startConvrsSession = () => {
    if (ConvrsChat) {
      ConvrsChat.ShowWebChat();
    }
  };

  return (
    <div
      className={cn("swap-free-promo-option-item", {
        "swap-free-promo-option-item--rtl": isRTL,
      })}
    >
      <img className="swap-free-promo-option-item__img" src={img} alt={""} />
      <p className="swap-free-promo-option-item__title">
        {
          <HighlightedLocalizationText
            localizationText={title}
            wordsToHighlight={titleAccent}
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
      </p>
      <div className="swap-free-promo-option-item__text-block">
        <p className="swap-free-promo-option-item__text">{t(text)}</p>
      </div>
      <button
        onClick={startConvrsSession}
        className="button-link button-link--red swap-free-promo-option-item__btn"
      >
        {t(btnTitle)}
      </button>
    </div>
  );
};

export default CenterPromoOption;
