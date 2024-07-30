import React from "react";
import cn from "classnames";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import { DIR_LTR, DIR_RTL } from "../../../helpers/constants";

const TestChessContent = ({ className }) => {
  const { t } = useTranslationWithVariables();
  const isRTL = useRtlDirection();

  return (
    <>
      <section
        className={cn("test-chess", className, {
          "test-chess--rtl": isRTL,
        })}
        dir={isRTL ? DIR_RTL : DIR_LTR}
      >
        <h3 className="test-chess__title">{t(`test-chess-title`)}</h3>
        <span className="test-chess__description">
          {t(`test-chess-description`)}
        </span>
      </section>
    </>
  );
};

export default TestChessContent;
