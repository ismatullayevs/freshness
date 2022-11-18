import Link from "next/link";
import React from "react";
import styles from "../styles/components/Tag.module.scss";

function Tag({ title }: { title: string }) {
  return (
    <Link href="#" className={styles.tag}>
      {title}
    </Link>
  );
}

export default Tag;
