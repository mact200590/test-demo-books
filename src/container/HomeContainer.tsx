import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { CACHE_KEYS } from "../cache/cacheKeys";
import { queryCLient } from "../cache/queryCLient";
import ListCardContainer from "../component/Card/ListCardContainer";
import { useDeleteBooksMarksMutation } from "../modules/bookmarks/mutation";
import { useGetAllBooksMarksQuery } from "../modules/bookmarks/query";
import RoutesName from "../navigation/routesUtils";
import { defaultAllBookmarks } from "../utils/defaultData";


const HomeContainer = () => {
  const { push } = useHistory();
  const { mutate, loading: loadingDelete } = useDeleteBooksMarksMutation();
  const { data: allBooks } = useGetAllBooksMarksQuery();

  const onSuccess = useCallback((response: any) => {
    queryCLient.invalidateQueries([CACHE_KEYS.BooksMarks.ALL_BOOKS_MARKS]);
  }, []);

  const handleDelete = useCallback(
    (id: string) => {
      mutate(
        {
          id,
        },
        { onSuccess }
      );
    },
    [mutate, onSuccess]
  );

  const handleOnEdit = useCallback(
    (id: string) => {
      queryCLient.setQueryData(
        [CACHE_KEYS.BooksMarks.IS_NEW],
        "false"
      );
      push(`${RoutesName["/book-mark/edit"]}/${id}`);
    },
    [push]
  );
  return (
    <div>
 
    <ListCardContainer
      loadingDelete={loadingDelete}
      allBookMarks={allBooks || defaultAllBookmarks}
      handleDelete={handleDelete}
      handleOnEdit={handleOnEdit}
    />
    </div>
  
  );
};

export default HomeContainer;
