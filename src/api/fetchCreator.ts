/* eslint-disable @typescript-eslint/no-unused-vars */

import { getToken } from "./auth";
interface Props{
    path:string,
    body?: any;
    method?:string,
    // token:string
}



const fetchCreator = async ({
  path,
  body,
  method,
}:Props) => {
  const token = await getToken();

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-API-KEY": "1234",
  } as Record<string, string>;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const options = {
    method,
    headers,
  } as RequestInit;

  if (body) {
    options.body = JSON.stringify(body);
  }

  const fullPath = `${process.env.REACT_APP_API_BASIC_URL}${path}`;

  const response = await fetch(fullPath, options);
  if (response.status === 204) {
    return {};
  }
  const jsonRes = await response.json();

  return jsonRes;
};

export default fetchCreator;
