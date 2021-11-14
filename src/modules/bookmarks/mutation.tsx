import { useMutation } from "react-query";
import { useGoToLogin } from "../../utils/hooks";
import endpointRegister from "../api/endpointRegister";
import fetchCreator from "../api/fetchCreator";

//This is the function to make the request(POST)
export const createBooksMarks = ({
  resourceId,
  resourceType,
  path,
  abstract,
}: Definitions.CreateBooksMarksParams) =>
  fetchCreator({
    path: endpointRegister.CREATE_BOOK_MARK,
    method: "POST",
    body: {
      "resource-id": resourceId,
      "resource-type": resourceType,
      abstract: abstract,
      path: path,
    },
  });
//This is the mutation for create a bookMark
export const useCreateBooksMarksMutation = () => {
  const {
    data,
    error,
    isLoading: loading,
    mutate,
  } = useMutation(createBooksMarks);
  useGoToLogin({ status: data?.status, error });
  return { loading, data, error, mutate };
};

//This is the function to make the request(DELETE)
export const deleteBooksMarks = ({ id }: { id: string }) =>
  fetchCreator({
    path: `${endpointRegister.DELETE_BOOK_MARK}/${id}`,
    method: "DELETE",
  });

  //this is mutation for DELETE
export const useDeleteBooksMarksMutation = () => {
  const {
    data,
    error,
    isLoading: loading,
    mutate,
  } = useMutation(deleteBooksMarks);
  useGoToLogin({ status: data?.status, error });
  return { loading, data, error, mutate };
};

//This is the function to make the request(PUT)
export const updateBooksMarks = ({
  id,
  abstract,
  path,
}: Definitions.UpdateBookMarkParams) =>
  fetchCreator({
    path: `${endpointRegister.DELETE_BOOK_MARK}/${id}`,
    body: {
      id,
      abstract,
      path,
    },
    method: "PUT",
  });
//this is mutation for Update
export const useUpdateBooksMarksMutation = () => {
  const {
    data,
    error,
    isLoading: loading,
    mutate,
  } = useMutation(updateBooksMarks);
  useGoToLogin({ status: data?.status, error });
  return { loading, data, error, mutate };
};
