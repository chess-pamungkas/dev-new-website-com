const React = require("react");

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
	setPostBodyComponents([
		<script
			key="live-chat"
			defer
			id="convrs-webchat"
			src={process.env.GATSBY_CONVRS_LIVECHAT}
		/>,
	]);
	setHeadComponents([
		<script
			key="disable-ga"
			dangerouslySetInnerHTML={{
				__html: `window['ga-disable-${process.env.GATSBY_GA}'] = true;`,
			}}
		/>,
	]);
};

export const onPreRenderHTML = ({
	getHeadComponents,
	replaceHeadComponents,
}) => {
	const headComponents = getHeadComponents();

	const orderedComponents = headComponents.sort((item) =>
		item.key === "disable-ga" ? -1 : 1
	);
	replaceHeadComponents(orderedComponents);
};
