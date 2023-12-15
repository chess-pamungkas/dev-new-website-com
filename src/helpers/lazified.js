import { lazy } from "react";
import { hasFeature } from "./features";
import { setHashQueryData } from "./version";
import { versionService } from "./versionService";

const COMMIT_HASH = process.env.GATSBY_COMMIT_HASH; // Ensure this is set in your environment variables

export const lazified = (importer) => {
  const load = async () => {
    try {
      return await importer();
    } catch (error) {
      const serverHash = await versionService.getVersion();
      console.error(
        "Dynamic module load error",
        { serverHash, commitHash: COMMIT_HASH },
        error.message
      );

      if (hasFeature("versionSentinel") && serverHash !== COMMIT_HASH) {
        setHashQueryData(serverHash);
        return import("./BlankComponent");
      }

      throw error;
    }
  };

  return lazy(load);
};
