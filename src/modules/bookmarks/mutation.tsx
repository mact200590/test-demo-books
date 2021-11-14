import { useMutation } from "react-query";
import { useGoToLogin } from "../../utils/hooks";
import endpointRegister from "../api/endpointRegister";
import fetchCreator from "../api/fetchCreator";

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

export const deleteBooksMarks = ({ id }: { id: string }) =>
  fetchCreator({
    path: `${endpointRegister.DELETE_BOOK_MARK}/${id}`,
    method: "DELETE",
  });

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
