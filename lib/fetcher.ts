import { IResponseError } from "../types";

const fetcher = async (url: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);

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
