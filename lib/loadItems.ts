import fetcher from "./fetcher";
import type { IItem, PaginatedData } from "../types/types";

async function loadItems({
  limit,
  offset,
}: {
  limit?: number;
  offset?: number;
}) {
  const data = await fetcher("/api/items/");
  return data.results;
}

export default loadItems;
