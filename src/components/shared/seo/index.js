import React from "react";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";
import { Helmet } from "react-helmet";

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
  const { isCySEC } = useEntityPostfix();

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
