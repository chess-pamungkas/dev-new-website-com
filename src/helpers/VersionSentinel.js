import { useEffect, useState } from "react";
import { versionService } from "./versionService";
import { hasFeature } from "./features";

const VersionSentinel = () => {
  const COMMIT_HASH = process.env.GATSBY_COMMIT_HASH;
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
  }, []);

  useEffect(() => {
    if (hasFeature("versionSentinel") && serverHash !== COMMIT_HASH) {
      console.log(
        `Version mismatch detected. Current: ${COMMIT_HASH}, Server: ${serverHash}`
      );
      // Optionally notify the user here before reloading
      window.location.reload();
    }
  }, [serverHash]);

  return null;
};

export default VersionSentinel;
