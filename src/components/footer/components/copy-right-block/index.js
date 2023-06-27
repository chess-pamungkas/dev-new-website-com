import React, { useEffect, useState } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import {
  FOOTER_COPYRIGHT,
  FOOTER_COPYRIGHT_FSA,
  FOOTER_FOR_FUNDING,
} from "../../../../helpers/footer.config";
import { WITHDRAWAL_PAGE_LINK } from "../../../../helpers/constants";
import { isBrowser } from "../../../../helpers/services/is-browser";
import { isCySEC } from "../../../../helpers/entity-resolver";

const CopyRightContent = () => {
  const { t } = useTranslation();

  const [additionalText, setAdditionalText] = useState(null);

  useEffect(() => {
    if (isBrowser()) {
      const path = window.location.pathname;
      // remove last "slash" character
      const page = path.substring(0, path.length - 1);
      switch (page) {
        case WITHDRAWAL_PAGE_LINK:
          setAdditionalText(
            <>
              <p>{t(FOOTER_FOR_FUNDING.p1)}</p>
              <p>{t(FOOTER_FOR_FUNDING.p2)}</p>
            </>
          );
          break;
        default:
          setAdditionalText(<></>);
      }
    }
    // eslint-disable-next-line
  }, []);

  return isCySEC ? (
    <>
      <p>{t(FOOTER_COPYRIGHT.p1)}</p>
      <p>{t(FOOTER_COPYRIGHT.p2)}</p>
      <p>
        {t(FOOTER_COPYRIGHT.p3)}&nbsp;
        <a href={FOOTER_COPYRIGHT.link1} target="_blank" rel="noreferrer">
          {t(FOOTER_COPYRIGHT.a1)}
        </a>
      </p>
      {additionalText}
    </>
  ) : (
    <>
      <p>{t(FOOTER_COPYRIGHT_FSA.p1)}</p>
      <p>{t(FOOTER_COPYRIGHT_FSA.p1_2)}</p>
      <p>{t(FOOTER_COPYRIGHT_FSA.p2)}</p>
      <p>
        {t(FOOTER_COPYRIGHT_FSA.p3_1)}&nbsp;
        <a
          href={FOOTER_COPYRIGHT_FSA.p3_link1}
          target="_blank"
          rel="noreferrer"
        >
          {t(FOOTER_COPYRIGHT_FSA.p3_a1)}
        </a>
        &nbsp;
        {t(FOOTER_COPYRIGHT_FSA.p3_2)}
      </p>
      <p>{t(FOOTER_COPYRIGHT_FSA.p4)}</p>
      {additionalText}
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
