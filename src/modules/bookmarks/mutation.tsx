import { useMutation } from "react-query";
import endpointRegister from "../../api/endpointRegister";
import fetchCreator from "../../api/fetchCreator";
import { BooksMarksType, DeleteBooksMarksType, UpdateBookMarkType } from "../../utils/types";

export const createBooksMarks = ({resourceId,resourceType,path,abstract}:BooksMarksType) =>
 fetchCreator({
  path: endpointRegister.CREATE_BOOK_MARK,
  method: "POST",
 body:{
  "resource-id": resourceId,
  "resource-type": resourceType,
  "abstract": abstract,
  "path": path
}
});

// eslint-disable-next-line import/prefer-default-export
export const useCreateBooksMarksMutation = () => {
  const { data, error, isLoading: loading, mutate } = useMutation
  (createBooksMarks);
  return { loading, data, error, mutate };
};



export const deleteBooksMarks = ({id}:DeleteBooksMarksType) =>
 fetchCreator({
  path: `${endpointRegister.DELETE_BOOK_MARK}/${id}`,
  method: "DELETE",
});

// eslint-disable-next-line import/prefer-default-export
export const useDeleteBooksMarksMutation = () => {
  const { data, error, isLoading: loading, mutate } = useMutation
  (deleteBooksMarks);
  return { loading, data, error, mutate };
};




export const updateBooksMarks = ({id,abstract,path}:UpdateBookMarkType) =>
 fetchCreator({
  path: `${endpointRegister.DELETE_BOOK_MARK}/${id}`,
  body:{
    id,
    abstract,
    path
  },
  method: "PUT",
});

// eslint-disable-next-line import/prefer-default-export
export const useUpdateBooksMarksMutation = () => {
  const { data, error, isLoading: loading, mutate } = useMutation(updateBooksMarks);
  return { loading, data, error, mutate };
};