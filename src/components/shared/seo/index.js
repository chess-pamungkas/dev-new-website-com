import React from "react";

const Seo = ({ title, description, robots }) => (
	<>
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta name="robots" content={robots} />
	</>
);

export default Seo;
