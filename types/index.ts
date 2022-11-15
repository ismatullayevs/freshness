export interface ICategory {
  id: number;
  title: string;
  slug: string;
}

export interface IItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  created_at: Date;
  modified_at: Date;
  price: string;
  discount: number;
  category: number;
}

export interface IResponseError extends Error {
  info?: unknown;
  status?: number;
}

export interface PaginatedData<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
