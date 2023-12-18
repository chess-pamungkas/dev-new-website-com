import { QueryCache, QueryClient } from "@tanstack/react-query";

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10, // 10 minutes
      retry: 1,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (!query?.meta?.isSilent) {
        console.error("Query error:", error);
      }
    },
  }),
});
