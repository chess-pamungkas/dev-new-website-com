import React from "react";
import { Helmet } from "react-helmet";
import { isCySEC } from "../../../helpers/entity-resolver";

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
  return (
    <Helmet>
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
