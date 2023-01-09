import React, { useContext } from "react";
import Helmet from "react-helmet";
import { I18nextContext } from "gatsby-plugin-react-i18next";

const Seo = ({ title, description }) => {
	const { language: i18Language } = useContext(I18nextContext);
	return (
		<Helmet htmlAttributes={{ language: i18Language }}>
			<title>{title}</title>
			<meta name="description" content={description} />
		</Helmet>
	);
};

export default Seo;
