const handleClient = (clientConfig, entityToRedirect, setIsPopupShown) => {
  if (clientConfig.banned || clientConfig.recommendedRedirect) {
    setIsPopupShown(true);
  }
};

export default handleClient;
