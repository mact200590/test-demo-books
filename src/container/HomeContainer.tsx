import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { CACHE_KEYS } from "../modules/cache/cacheKeys";
import { queryCLient } from "../modules/cache/queryCLient";
import { Home } from "../component";
import { useDeleteBooksMarksMutation } from "../modules/bookmarks/mutation";
import { useGetAllBooksMarksQuery } from "../modules/bookmarks/query";
import RoutesName from "../navigation/routesUtils";
import { defaultAllBookmarks } from "../utils/defaultData";

// Container of list of card
const HomeContainer = () => {
  const { push } = useHistory();
  const { mutate, loading: loadingDelete } = useDeleteBooksMarksMutation();
  const { data: allBooks, loading } = useGetAllBooksMarksQuery();
  const onMutate = useCallback((response: any) => {
    queryCLient.invalidateQueries([CACHE_KEYS.BooksMarks.ALL_BOOKS_MARKS]);
  }, []);

  const handleDelete = useCallback(
    (id: string) => {
      mutate(
        {
          id,
        },
        { onSuccess: onMutate, onError: onMutate }
      );
    },
    [mutate, onMutate]
  );

  const handleOnEdit = useCallback(
    (id: string) => {
      queryCLient.setQueryData([CACHE_KEYS.BooksMarks.IS_NEW], "false");
      push(`${RoutesName["/book-mark/edit"]}/${id}`);
    },
    [push]
  );
  return (
    <Home
      allBookMarks={allBooks || defaultAllBookmarks}
      loading={loading}
      loadingDelete={loadingDelete}
      handleDelete={handleDelete}
      handleOnEdit={handleOnEdit}
    />
  );
};

export default HomeContainer;
