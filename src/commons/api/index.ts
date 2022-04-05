import axios, { Method } from "axios";

const PROTOCOL = "http";

const SERVER_URL = "localhost:4200";

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

export interface ApiError {
  message: string;
  statusCode: number;
}

export const requestApi = async (
  url: string,
  method: Method,
  body: any
): Promise<any> => {
  if (validateInputMethod(method)) {
    try {
      const response = await axios({
        ...{
          url: `/${url}`,
          baseURL: BASE_URL,
          method: method,
        },
        ...{ body },
      });
      return response.data;
    } catch (e: any) {
      return { message: e };
    }
  }
};
