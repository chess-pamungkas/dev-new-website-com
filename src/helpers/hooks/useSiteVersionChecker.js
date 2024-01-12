import { useEffect } from "react";

const useSiteVersionChecker = () => {
  const fetchJsonData = async (path) => {
    try {
      const response = await fetch(path);
      if (
        response.ok &&
        response.headers.get("content-type")?.includes("application/json")
      ) {
        return await response.json();
      } else {
        console.error(`Response not OK or not JSON for path: ${path}`);
        return null;
      }
    } catch (error) {
      console.error(`Error fetching JSON data from ${path}:`, error);
      return null;
    }
  };

  const getPageDataPath = () => {
    const pagePath = window.location.pathname;
    // Handle the index page separately
    if (pagePath === "/" || pagePath === "/index" || pagePath === "/index/") {
      return "/page-data/index/page-data.json";
    }
    // Ensure the path ends with a slash for consistency
    return `/page-data${
      pagePath.endsWith("/") ? pagePath : pagePath + "/"
    }page-data.json`;
  };

  const checkVersionUpdates = async () => {
    const appData = await fetchJsonData("/page-data/app-data.json");
    const currentAppHash = sessionStorage.getItem(
      "gatsby-app-compilation-hash"
    );
    const newAppHash = appData?.webpackCompilationHash;

    let shouldReload = false;
    if (currentAppHash !== newAppHash) {
      sessionStorage.setItem("gatsby-app-compilation-hash", newAppHash);
      shouldReload = true;
    }
    const pageDataPath = getPageDataPath();
    const pageData = await fetchJsonData(pageDataPath);
    const currentPageData = sessionStorage.getItem("gatsby-page-data");
    const newPageData = JSON.stringify(pageData);

    if (currentPageData !== newPageData) {
      sessionStorage.setItem("gatsby-page-data", newPageData);
      shouldReload = true;
    }

    if (shouldReload) {
      sessionStorage.setItem("gatsby-reload-compilation-hash-match", "1");
      window.location.reload(true);
    }
  };

  useEffect(() => {
    checkVersionUpdates();
    // Optional: Set an interval for periodic checks
    // const interval = setInterval(checkVersionUpdates, 60000); // e.g., check every minute
    // return () => clearInterval(interval);
  }, []);

  return null;
};

export default useSiteVersionChecker;
