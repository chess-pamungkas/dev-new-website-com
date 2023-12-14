import { client } from "./client";
import { versionService } from "./versionService";

const KEYS = {
  HASH: "HASH",
};

const serverHashQuery = {
  queryKey: [KEYS.HASH],
  queryFn: versionService.getVersion,
};

const setHashQueryData = (hash) => {
  client.setQueryData([KEYS.HASH], hash);
};

export { serverHashQuery, setHashQueryData };
