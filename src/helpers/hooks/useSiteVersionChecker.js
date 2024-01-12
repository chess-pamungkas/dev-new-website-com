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

    // Check page-specific data
    const pagePath = window.location.pathname.endsWith("/")
      ? window.location.pathname
      : window.location.pathname + "/";
    const pageData = await fetchJsonData(`/page-data${pagePath}page-data.json`);
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
