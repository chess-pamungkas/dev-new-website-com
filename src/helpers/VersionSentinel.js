import { useEffect, useState } from "react";
import { versionService } from "./versionService";
import { hasFeature } from "./features";
import { POLLING_INTERVAL } from "./queries";

const VersionSentinel = () => {
  const COMMIT_HASH = process.env.GATSBY_COMMIT_HASH;
  const [serverHash, setServerHash] = useState(COMMIT_HASH);
  const [reloaded, setReloaded] = useState(false);

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

  useEffect(() => {
    if (
      hasFeature("versionSentinel") &&
      serverHash !== COMMIT_HASH &&
      !reloaded
    ) {
      console.log(
        `Version mismatch detected. Current: ${COMMIT_HASH}, Server: ${serverHash}`
      );
      setReloaded(true);
      window.location.reload();
    }
  }, [serverHash, reloaded]);

  return null;
};

export default VersionSentinel;
