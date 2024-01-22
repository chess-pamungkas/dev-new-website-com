import React from "react";
import { LEGAL_PAGE_LINK } from "./constants";
import { RISK_DISCLOSURE_DOC } from "./documents";
import { isCySEC } from "./entity-resolver";
import { useTranslationWithVariables } from "./hooks/use-translation-with-vars";

const FOOTER_TEXT = "footer-text-cysec";
const FOOTER_TEXT_FSA = "footer-text-fsa";

export const getFooterText = () => (isCySEC ? FOOTER_TEXT : FOOTER_TEXT_FSA);

const FOOTER_COPYRIGHT = {
  p1: "footer-copyright-paragraph1-cysec",
  p2: "footer-copyright-paragraph2-cysec",
  a1: "footer-copyright-paragraph-link-cysec",
  link1: RISK_DISCLOSURE_DOC,
};

const FOOTER_COPYRIGHT_FSA = {
  p1: "footer-copyright-paragraph1-fsa",
  p1_2: "footer-copyright-paragraph1_2-fsa",
  p2: "footer-copyright-paragraph2-fsa",
  p3_1: "footer-copyright-paragraph3-part1-fsa",
  p3_2: "footer-copyright-paragraph3-part2-fsa",
  p4: "footer-copyright-paragraph4-fsa",
  p3_a1: "footer-copyright-paragraph3-link-fsa",
  p3_link1: LEGAL_PAGE_LINK,
  p5: "footer-copyright-paragraph5-fsa",
};

const FOOTER_COMPANY = { p1: "footer-company-name-text" };

export const FOOTER_FOR_FUNDING = {
  p1: "footer-funding-1",
  p2: "footer-funding-2",
};

export const getFooterCopyright = () => {
  const { t } = useTranslationWithVariables();

  return isCySEC ? (
    <>
      <p>{t(FOOTER_COPYRIGHT.p1)}</p>
      <p>
        {t(FOOTER_COPYRIGHT.p2)}&nbsp;
        <a href={FOOTER_COPYRIGHT.link1} target="_blank" rel="noreferrer">
          {t(FOOTER_COPYRIGHT.a1)}
        </a>
      </p>
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
      <p>{t(FOOTER_COPYRIGHT_FSA.p5)}</p>
    </>
  );
};
export const getFooterCompanyName = () => {
  const { t } = useTranslationWithVariables();
  return <p>{t(FOOTER_COMPANY.p1)}</p>;
};
