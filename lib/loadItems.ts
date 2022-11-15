import fetcher from "./fetcher";
import type { IItem, PaginatedData } from "../types/index";

export default async function loadItems() {
  const data: PaginatedData<IItem> = await fetcher("/api/items/");
  return data.results;
}
