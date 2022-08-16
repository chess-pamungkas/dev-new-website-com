const handleClient = (clientConfig, entityToRedirect, setIsPopupShown) => {
  if (clientConfig.banned || clientConfig.recommendedRedirect) {
    setIsPopupShown(true);
  } else if (clientConfig.forceRedirect) {
    window.location.replace(entityToRedirect);
  }
};

export default handleClient;
