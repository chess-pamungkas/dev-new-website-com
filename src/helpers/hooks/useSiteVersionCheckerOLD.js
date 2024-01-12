import { useEffect } from "react";

const useSiteVersionChecker = () => {
  const fetchJsonData = async (path) => {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching JSON data from ${path}:`, error);
      // Force a hard refresh if there is an error fetching the data
      window.location.reload(true);
      return null;
    }
  };

  const getPageDataPath = () => {
    const pagePath = window.location.pathname;
    // Adjust this logic based on your site's URL structure
    return pagePath.endsWith("/") ? pagePath : pagePath + "/";
  };

  const checkVersionUpdates = async () => {
    const appDataPath = "/page-data/app-data.json"; // Adjust if your path is different
    const appData = await fetchJsonData(appDataPath);
    const currentAppHash = sessionStorage.getItem(
      "gatsby-app-compilation-hash"
    );
    const newAppHash = appData?.webpackCompilationHash;

    if (currentAppHash !== newAppHash) {
      sessionStorage.setItem("gatsby-app-compilation-hash", newAppHash);
      window.location.reload(true);
      return;
    }

    // Check for page-specific data updates
    const pageDataPath = `/page-data${getPageDataPath()}page-data.json`; // Adjust if your path is different
    const pageData = await fetchJsonData(pageDataPath);
    const currentPageData = sessionStorage.getItem("gatsby-page-data");
    const newPageData = JSON.stringify(pageData);

    if (currentPageData !== newPageData) {
      sessionStorage.setItem("gatsby-page-data", newPageData);
      window.location.reload(true);
    }
  };

  useEffect(() => {
    checkVersionUpdates();
  }, []);

  return null;
};

export default useSiteVersionChecker;
