import React from "react";
import styles from "../styles/components/Search.module.scss";
import { BiSearch } from "react-icons/bi";
import { ICategory } from "../types";

function Search({ categories }: { categories: ICategory[] }) {
  return (
    <form className={styles.form}>
      <select name="category" className={styles.select}>
        <option defaultValue={""}>All categories</option>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.title}
          </option>
        ))}
      </select>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search products, categories..."
          className={styles.input}
        />
        <button className={styles.submit} type="submit">
          <BiSearch />
        </button>
      </div>
    </form>
  );
}

export default Search;
