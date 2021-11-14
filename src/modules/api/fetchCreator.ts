import { getToken } from "./auth";
interface Props {
  path: string,
  body?: any;
  method?: string,
}


//This is fetch creator for make the request with Bear token
const fetchCreator = async ({
  path,
  body,
  method,
}: Props) => {
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
  const { status } = response;
  if (response.ok && status === 204) {
    return { jsonRes: {}, status };
  }
  const jsonRes = await response.json();
  if (!response.ok) {
    const message: string = jsonRes.message;
    const messageArray = message.split(',');
    if (status === 403) {
      throw new Error("illegal");
    }
    if (messageArray.length === 1) {
      throw new Error(messageArray[0]);
    }
    const msg = messageArray.find(m => m.includes('Msg:')) || 'Unknown Error';
    throw new Error(msg);
  }
  return { jsonRes, status };
};

export default fetchCreator;
