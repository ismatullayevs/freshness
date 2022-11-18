import { IResponseError } from "../types/types";

const fetcher = async (input: RequestInfo | URL, init?: RequestInit) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${input}`, init);

  if (!res.ok) {
    const error: IResponseError = new Error(
      "An error occured while fetching the data"
    );
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default fetcher;
