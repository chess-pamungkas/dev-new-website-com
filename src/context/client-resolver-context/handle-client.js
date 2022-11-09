const handleClient = (clientConfig, entityToRedirect, setIsPopupShown) => {
  if (clientConfig.banned || clientConfig.recommendedRedirect) {
    setIsPopupShown(true);
  } else if (clientConfig.forceRedirect) {
    // TODO remove this after the bug is caught
    console.warn("clientConfig: ", clientConfig);
    console.warn(`entityToRedirect: ${entityToRedirect}`);
    setTimeout(
      () =>
        window.location.replace(entityToRedirect + window.location.pathname),
      10000
    );
  }
};

export default handleClient;
