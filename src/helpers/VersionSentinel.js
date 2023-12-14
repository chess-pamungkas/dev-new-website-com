import { useEffect, useState } from "react";
import { versionService } from "./versionService"; // Adjust the path as necessary
import { hasFeature, POLLING_INTERVAL, COMMIT_HASH } from "~/config";

const VersionSentinel = () => {
  const [serverHash, setServerHash] = useState(COMMIT_HASH);

  useEffect(() => {
    const fetchServerHash = async () => {
      try {
        const hash = await versionService.getVersion();
        setServerHash(hash);
      } catch (error) {
        console.error("Error fetching version:", error);
      }
    };

    fetchServerHash();
    const intervalId = setInterval(fetchServerHash, POLLING_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  if (hasFeature("versionSentinel") && serverHash !== COMMIT_HASH) {
    window.location.reload();
  }

  return null;
};

export default VersionSentinel;
