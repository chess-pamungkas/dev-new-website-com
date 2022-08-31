import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import {
  LEARN_MORE_LINK,
  PRIVACY_POLICY_LINK,
  TERMS_OF_USE_LINK,
} from "../../../../helpers/constants";
import { FOOTER_COPYRIGHT } from "../../../../helpers/footer.config";

const CopyRightContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t(FOOTER_COPYRIGHT.p1)}</p>
      <p>
        <a href={LEARN_MORE_LINK} target="_blank" rel="noreferrer">
          {t(FOOTER_COPYRIGHT.p2Link)}
        </a>
        &nbsp;{t(FOOTER_COPYRIGHT.p2)}
      </p>
      <p>{t(FOOTER_COPYRIGHT.p3Part1)}<br />{t(FOOTER_COPYRIGHT.p3Part2)}</p>
      <p>
        {t(FOOTER_COPYRIGHT.p4Part1)}&nbsp;
        <a href={TERMS_OF_USE_LINK} target="_blank" rel="noreferrer">
          {t(FOOTER_COPYRIGHT.p4TermsLink)}
        </a>
        &nbsp;{t(FOOTER_COPYRIGHT.p4And)}&nbsp;
        <a href={PRIVACY_POLICY_LINK} target="_blank" rel="noreferrer">
          {t(FOOTER_COPYRIGHT.p4PrivacyLink)}
        </a>
        {t(FOOTER_COPYRIGHT.p4Part2)}
      </p>
      <p>{t(FOOTER_COPYRIGHT.p5)}</p>
      <p>{t(FOOTER_COPYRIGHT.p6)}</p>
      <p>{t(FOOTER_COPYRIGHT.p7)}</p>
      <p>{t(FOOTER_COPYRIGHT.p8)}</p>
      <p>{t(FOOTER_COPYRIGHT.p9)}</p>
    </>
  );
};

const CopyRightBlock = ({ className }) => {
  return (
    <section className={cn("copy-right-block", className)}>
      <div className="copy-right-block__text">
        <CopyRightContent />
      </div>
    </section>
  );
};

export default CopyRightBlock;
