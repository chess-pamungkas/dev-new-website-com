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
    if (
      hasFeature("versionSentinel") &&
      serverHash !== COMMIT_HASH &&
      !localStorage.getItem("reloaded")
    ) {
      console.log(
        `Version mismatch detected. Current: ${COMMIT_HASH}, Server: ${serverHash}`
      );
      localStorage.setItem("reloaded", "true");
      setTimeout(() => window.location.reload(), 2000); // Add a delay before reload
    } else {
      localStorage.removeItem("reloaded"); // Clear the flag if hashes match
    }
  }, [serverHash]);

  return null;
};

export default VersionSentinel;
