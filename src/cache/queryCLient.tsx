import { QueryClient } from "react-query";

const NEVER = Number.POSITIVE_INFINITY;

// eslint-disable-next-line import/prefer-default-export
export const queryCLient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        cacheTime: NEVER,
        staleTime: NEVER,
        retry: false,
      },
    },
  });
