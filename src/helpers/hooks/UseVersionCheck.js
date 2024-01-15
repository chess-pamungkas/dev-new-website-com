import { useEffect } from "react";

const useVersionCheck = () => {
  const fetchJsonData = async (path) => {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching JSON data from ${path}:`, error);
      // Hard refresh if there's an error fetching the new version
      window.location.reload(true);
      return null;
    }
  };

  const checkVersion = async () => {
    const appVersionData = await fetchJsonData("/version.json");

    // If there's an error fetching, the function will have already triggered a hard refresh
    if (!appVersionData) {
      return;
    }

    const currentVersion = localStorage.getItem("site-version");

    if (currentVersion !== appVersionData.version) {
      // Clear the current version and reload flag before setting new version
      localStorage.removeItem("site-version");
      localStorage.removeItem("has-reloaded-for-version");
      localStorage.setItem("site-version", appVersionData.version);
      window.location.reload(true);
    }
  };

  useEffect(() => {
    checkVersion();
  }, []);

  return null;
};

export default useVersionCheck;
