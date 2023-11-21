import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { isCySEC } from "../../../helpers/entity-resolver";
import LanguageContext from "../../../context/language-context";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import { DIR_LTR, DIR_RTL } from "../../../helpers/constants";

const noIndex = Boolean(Number(process.env.GATSBY_NOINDEX));
const microsoftAds = process.env.GATSBY_MICROSOFT_ADS;

const Seo = ({
  title,
  description,
  fsaTitle,
  cysecTitle,
  fsaDescription,
  cysecDescription,
  fsaRobots,
  cysecRobots,
}) => {
  const { selectedLanguage } = useContext(LanguageContext);
  const isRTL = useRtlDirection();

  return (
    <Helmet
      htmlAttributes={{
        lang: selectedLanguage.id,
        dir: isRTL ? DIR_RTL : DIR_LTR,
      }}
    >
      <title>{title || (isCySEC ? cysecTitle : fsaTitle)}</title>
      <meta
        name="description"
        content={description || (isCySEC ? cysecDescription : fsaDescription)}
      />
      <meta
        name="robots"
        content={noIndex ? "noindex" : isCySEC ? cysecRobots : fsaRobots}
      />
      {microsoftAds && <meta name="msvalidate.01" content={microsoftAds} />}
    </Helmet>
  );
};

export default Seo;
