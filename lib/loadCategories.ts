import { ICategory } from "../types/types";
import fetcher from "./fetcher";

export default async function loadCategories() {
  const categories: ICategory[] = await fetcher("/api/categories/");

  return categories;
}
