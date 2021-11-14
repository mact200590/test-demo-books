import { useQuery } from "react-query";
import fetchCreator from "../api/fetchCreator";
import { CACHE_KEYS } from "../cache/cacheKeys";
import { useGoToLogin } from "../../utils/hooks";
import { defaultAllBookmarks } from "../../utils/defaultData";
//This is function request bookmarks (GET)
const fetchAllBooksMarks = () =>
  fetchCreator({
    path: "/bookmarks",
    method: "GET",
  });


type BookMarkExtended=Definitions.BookMarks &{
  author:{"user-name":string}
}

// this is the query get all bookMarks
export const useGetAllBooksMarksQuery = () => {
  const {
    data,
    error,
    isLoading: loading,
    refetch,
  } = useQuery<{ jsonRes: BookMarkExtended[]; status: number }>(
    [CACHE_KEYS.BooksMarks.ALL_BOOKS_MARKS],
    () => fetchAllBooksMarks()
  );
  useGoToLogin({ status: data?.status, error });
  const dataMapped = (data?.jsonRes || defaultAllBookmarks).map((d) => ({
    ...d,
    author: { ...d.author, userName: d.author["user-name"] },
  }));
  return {
    loading,
    data: dataMapped,
    error,
    refetch,
  };
};




