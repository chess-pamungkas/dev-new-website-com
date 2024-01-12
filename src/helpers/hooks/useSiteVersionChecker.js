import { useEffect } from "react";

const useSiteVersionChecker = (pagePath) => {
  // Function to fetch and return the content of a JSON file
  const fetchJsonData = async (path) => {
    try {
      const response = await fetch(path);
      return response.json();
    } catch (error) {
      console.error(`Error fetching JSON data from ${path}:`, error);
      return null;
    }
  };

  // Function to check and handle version updates
  const checkVersionUpdates = async () => {
    const appData = await fetchJsonData("/app-data.json");
    const pageData = await fetchJsonData(`${pagePath}/page-data.json`);

    const currentAppHash = sessionStorage.getItem(
      "gatsby-app-compilation-hash"
    );
    const currentPageHash = sessionStorage.getItem(
      "gatsby-page-compilation-hash"
    );
    const reloadMatchHash = sessionStorage.getItem(
      "gatsby-reload-compilation-hash-match"
    );

    const newAppHash = appData?.webpackCompilationHash;
    const newPageHash = pageData?.result?.pageContext?.__N_SSG; // Or appropriate property for page hash

    let shouldReload = false;
    if (currentAppHash !== newAppHash || currentPageHash !== newPageHash) {
      shouldReload = true;
    }

    if (shouldReload) {
      sessionStorage.setItem("gatsby-app-compilation-hash", newAppHash);
      sessionStorage.setItem("gatsby-page-compilation-hash", newPageHash);
      sessionStorage.setItem("gatsby-reload-compilation-hash-match", "1");
      window.location.reload(true);
    } else if (reloadMatchHash !== "1") {
      sessionStorage.setItem("gatsby-reload-compilation-hash-match", "1");
    }
  };

  useEffect(() => {
    checkVersionUpdates();
    // Optional: Set an interval for periodic checks
  }, []);

  return null;
};

export default useSiteVersionChecker;
