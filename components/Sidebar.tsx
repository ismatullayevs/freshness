import Link from "next/link";
import React from "react";
import styles from "../styles/components/Sidebar.module.scss";
import { ICategory, IItem } from "../types";

interface SidebarProps {
  categories: ICategory[];
  items: IItem[];
}

function Sidebar({ categories, items }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.menu}>
        <h3 className={styles.title}>Category menu</h3>
        <ul className={styles.links}>
          {categories.map((cat, index) => (
            <li key={index}>
              <Link href={cat.slug}>{cat.title}</Link>
            </li>
          ))}
        </ul>
        <Link href="/categories" className={styles.more}>
          More categories
        </Link>
      </div>
      <div className={styles.menu}>
        <h3 className={styles.title}>Best selling products</h3>
        <ul className={styles.links}>
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={`${process.env.NEXT_PUBLIC_SITE_URL}/products/${item.slug}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/categories" className={styles.more}>
          More categories
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
