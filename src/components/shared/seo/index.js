import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
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
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <meta
        name="robots"
        content={noIndex ? "noindex" : isCySEC ? cysecRobots : fsaRobots}
      />
      {microsoftAds && <meta name="msvalidate.01" content={microsoftAds} />}
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  fsaTitle: PropTypes.string,
  cysecTitle: PropTypes.string,
  fsaDescription: PropTypes.string,
  cysecDescription: PropTypes.string,
  fsaRobots: PropTypes.string,
  cysecRobots: PropTypes.string,
};
export default Seo;
