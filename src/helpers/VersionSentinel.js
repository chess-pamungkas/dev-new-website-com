import { useEffect, useState } from "react";
import { versionService } from "./versionService"; // Adjust the path as necessary
import { hasFeature } from "./features";
import { POLLING_INTERVAL } from "./queries";
const VersionSentinel = () => {
  const COMMIT_HASH = process.env.GATSBY_COMMIT_HASH; // Accessing the commit hash from environment variables

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
