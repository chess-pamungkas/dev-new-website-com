import React from "react";

const Seo = ({ title, description }) => (
	<>
		<title>{title}</title>
		<meta name="description" content={description} />
	</>
);

export default Seo;
