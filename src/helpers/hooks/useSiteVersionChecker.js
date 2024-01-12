// src/hooks/useSiteVersionChecker.js
import { useEffect, useState } from "react";

const useSiteVersionChecker = () => {
  const [retryCount, setRetryCount] = useState(0);
  const [showFallback, setShowFallback] = useState(false);

  const checkVersion = async () => {
    try {
      const response = await fetch("/app-data.json");
      const appData = await response.json();

      const currentHash = sessionStorage.getItem(
        "gatsby-reload-compilation-hash"
      );
      const newHash = appData.webpackCompilationHash;

      if (currentHash && currentHash !== newHash) {
        sessionStorage.setItem("gatsby-reload-compilation-hash", newHash);
        window.location.reload();
      } else {
        sessionStorage.setItem("gatsby-reload-compilation-hash", newHash);
        setShowFallback(false); // Hide fallback content if fetch is successful
      }

      setRetryCount(0); // Reset retry count after a successful fetch
    } catch (error) {
      console.error("Error checking site version:", error);
      setRetryCount((retryCount) => retryCount + 1);

      if (retryCount >= 3) {
        // Show fallback content after 3 failed attempts
        setShowFallback(true);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(checkVersion, 60000); // Checks every minute,
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (retryCount > 0 && retryCount < 3) {
      const retryInterval = setTimeout(checkVersion, 300000); // Retry after 5 minutes
      return () => clearTimeout(retryInterval);
    }
  }, [retryCount]);

  if (showFallback) {
    // Render fallback content or notification to the user
    return (
      <div>
        Latest content not available. Please check your connection and try
        refreshing the page
      </div>
    );
  }

  return null; // when everything is normal
};

export default useSiteVersionChecker;
