import { useEffect, useState } from "react";
import { versionService } from "./versionService";
import { hasFeature } from "./features";
import { isBrowser } from "./services/is-browser"; // Ensure this is the correct path

const VersionSentinel = () => {
  const COMMIT_HASH = process.env.GATSBY_COMMIT_HASH;
  const [serverHash, setServerHash] = useState(COMMIT_HASH);

  useEffect(() => {
    if (isBrowser()) {
      const isLocal = window.location.hostname === "localhost";
      const fetchServerHash = async () => {
        try {
          if (!isLocal) {
            const hash = await versionService.getVersion();
            setServerHash(hash);
          } else {
            setServerHash("local");
          }
        } catch (error) {
          console.error("Error fetching version:", error);
        }
      };

      if (!isLocal) {
        fetchServerHash();
      }
    }
  }, []);

  useEffect(() => {
    if (isBrowser()) {
      const shouldReload =
        hasFeature("versionSentinel") &&
        serverHash !== COMMIT_HASH &&
        !localStorage.getItem("reloaded");

      if (shouldReload) {
        console.log(
          `Version mismatch detected. Current: ${COMMIT_HASH}, Server: ${serverHash}`
        );
        localStorage.setItem("reloaded", "true");
        setTimeout(() => window.location.reload(), 2000);
      } else if (!shouldReload && localStorage.getItem("reloaded")) {
        localStorage.removeItem("reloaded");
      }
    }
  }, [serverHash]);

  return null;
};

export default VersionSentinel;
