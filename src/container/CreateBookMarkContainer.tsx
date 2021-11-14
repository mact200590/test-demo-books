import React, { useCallback, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CACHE_KEYS } from "../modules/cache/cacheKeys";
import { queryCLient } from "../modules/cache/queryCLient";
import { CreateBookMark } from "../component";
import {
  useCreateBooksMarksMutation,
  useUpdateBooksMarksMutation,
} from "../modules/bookmarks/mutation";
import { useGetAllBooksMarksQuery } from "../modules/bookmarks/query";
import { defaultCreateBooksMarks } from "../utils/defaultData";

// Container of create and edit BookMark 
const CreateBookMarkContainer = () => {
  const [error, setError] = useState<string>("");
  const data = queryCLient.getQueryData(CACHE_KEYS.BooksMarks.IS_NEW);
  const { push } = useHistory();
  const { data: allBooks } = useGetAllBooksMarksQuery();
  const { mutate, loading } = useCreateBooksMarksMutation();
  const { mutate: mutateUpdate, loading: loadingEdit } =
    useUpdateBooksMarksMutation();
  let initialValues;

  const { id } = useParams<{ id: string }>();

  const isNew = data === "false" ? true : false;

  if (data === "false" && allBooks) {
    const card = allBooks.find((card) => card.id === id);
    initialValues = {
      resourceId: card?.id || "",
      abstract: card?.abstract || "",
      path: card?.path || "",
    };
  }
  const onSuccess = useCallback(
    (response) => {
      const { message } = response;
      if (!message) {
        queryCLient.invalidateQueries([CACHE_KEYS.BooksMarks.ALL_BOOKS_MARKS]);
        push("/home");
      }
    },
    [push]
  );

  const onError = useCallback((err: any) => {
    setError((err as Error).message);
  }, []);

  const onSuccessEdit = useCallback(
    (response) => {
      const { message } = response;
      if (!message) {
        queryCLient.invalidateQueries([CACHE_KEYS.BooksMarks.ALL_BOOKS_MARKS]);
        push("/home");
      }
    },
    [push]
  );

  const handleCreateBookMark = useCallback(
    (resourceId: string, abstract: string, path: string) => {
      if (data === "false") {
        mutateUpdate(
          { id: resourceId, abstract, path },
          { onSuccess: onSuccessEdit, onError }
        );
      } else {
        mutate(
          { resourceId, resourceType: "chapter", path, abstract },
          { onSuccess, onError }
        );
      }
    },
    [data, mutate, mutateUpdate, onError, onSuccess, onSuccessEdit]
  );
  return (
    <div>
      <CreateBookMark
        loading={loading || loadingEdit}
        handleCreateBookMark={handleCreateBookMark}
        isNew={isNew}
        initialValues={initialValues || defaultCreateBooksMarks}
        error={error}
      />
    </div>
  );
};

export default CreateBookMarkContainer;
