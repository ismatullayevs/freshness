import React from "react";
import styles from "../styles/components/NavLinks.module.scss";
import Link from "next/link";
import { ICategory } from "../types/types";

function NavLinks({ categories }: { categories: ICategory[] }) {
  return (
    <ul className={styles.links}>
      {categories.map((cat) => (
        <li key={cat.id} className={styles.link}>
          <Link href={`/categories/${cat.slug}`}>{cat.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
