import React from "react";
import { Helmet } from "react-helmet";
import { isCySEC } from "../../../helpers/entity-resolver";

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
      <meta name="robots" content={isCySEC ? cysecRobots : fsaRobots} />
    </Helmet>
  );
};

export default Seo;
