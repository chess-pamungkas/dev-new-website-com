import { useEffect } from "react";

const useSiteVersionChecker = () => {
  useEffect(() => {
    const checkVersion = async () => {
      try {
        const response = await fetch("/app-data.json");
        const appData = await response.json();

        const currentHash = sessionStorage.getItem(
          "gatsby-reload-compilation-hash"
        );
        const newHash = appData.webpackCompilationHash;

        if (currentHash && currentHash !== newHash) {
          // New deployment detected, perform a hard refresh
          sessionStorage.setItem("gatsby-reload-compilation-hash", newHash);
          window.location.reload(true);
        } else if (!currentHash) {
          // Store the hash during the first visit
          sessionStorage.setItem("gatsby-reload-compilation-hash", newHash);
        }
      } catch (error) {
        console.error("Error checking site version:", error);
      }
    };

    checkVersion();
    // Optional: Set an interval to check periodically
    // const interval = setInterval(checkVersion, 60000); // e.g., check every minute
    // return () => clearInterval(interval);
  }, []);
};

export default useSiteVersionChecker;
