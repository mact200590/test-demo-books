import { useQuery } from "react-query";
import fetchCreator from "../../api/fetchCreator";
import { CACHE_KEYS } from "../../cache/cacheKeys";
import { CardBookMarksType } from "../../utils/types";


const fetchAllBooksMarks = () =>
  fetchCreator({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    path: "/bookmarks",
    method: "GET",
  });

// eslint-disable-next-line import/prefer-default-export
export const useGetAllBooksMarksQuery = () => {
  const { data, error, isLoading: loading, refetch } = useQuery<CardBookMarksType[]>(
    [CACHE_KEYS.BooksMarks.ALL_BOOKS_MARKS],
    () => fetchAllBooksMarks(),
  );
  
  return { loading, data, error, refetch };
};

  