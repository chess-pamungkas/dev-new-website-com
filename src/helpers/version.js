import { client } from "./client";
import { versionService } from "./versionService";

const KEYS = {
  HASH: "HASH",
};

export const serverHashQuery = {
  queryKey: [KEYS.HASH],
  queryFn: versionService.getVersion,
};

export const setHashQueryData = (hash) =>
  client.setQueryData([KEYS.HASH], hash);
