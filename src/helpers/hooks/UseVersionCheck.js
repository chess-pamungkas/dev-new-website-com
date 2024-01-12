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
      // Consider how to handle fetch errors. Maybe a retry logic or a user notification.
      return null;
    }
  };

  const checkVersion = async () => {
    const appVersionData = await fetchJsonData("/version.json");
    const currentVersion = sessionStorage.getItem("site-version");

    if (!appVersionData) {
      // Handle the scenario where version.json could not be fetched.
      console.warn("Could not fetch version data. Skipping version check.");
      return;
    }

    if (!currentVersion) {
      // First-time visit or session storage cleared.
      sessionStorage.setItem("site-version", appVersionData.version);
    } else if (currentVersion !== appVersionData.version) {
      // Version mismatch detected, trigger a reload.
      sessionStorage.setItem("site-version", appVersionData.version);
      window.location.reload(true);
    }
  };

  useEffect(() => {
    checkVersion();
    // Optional: Set an interval for periodic checks
    // const interval = setInterval(checkVersion, 60000); // e.g., check every minute
    // return () => clearInterval(interval);
  }, []);

  return null;
};

export default useVersionCheck;
