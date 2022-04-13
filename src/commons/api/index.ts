import axios, { Method } from "axios";

const PROTOCOL = "http";

const SERVER_URL = "localhost:8084";

const BASE_URL = `${PROTOCOL}://${SERVER_URL}`;

const validateInputMethod = (method: string) => {
  return (
    method === "get" ||
    method === "GET" ||
    method === "post" ||
    method === "POST" ||
    method === "delete" ||
    method === "DELETE" ||
    method === "patch" ||
    method === "PATCH"
  );
};

export const requestApi = async (
  url: string,
  method: Method,
  body: any = {},
  token: string = ""
): Promise<any> => {
  if (validateInputMethod(method)) {
    const requestBody: any = {
      ...{
        url: `/${url}`,
        baseURL: BASE_URL,
        method: method,
      },
    };
    if (method !== "GET" && method !== "get") {
      requestBody.data = {
        ...body,
      };
    }
    if (token && token !== "") {
      requestBody.headers = {
        Authorization: `Bearer: ${token}`,
      };
    }
    const response = await axios(requestBody);
    return response;
  } else {
    throw Error("Invalid HTTP method specified.");
  }
};
