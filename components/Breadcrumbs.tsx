import styles from "../styles/components/Breadcrumbs.module.scss";
import React, { Children } from "react";

interface BreadcrumbsProps {
  children: React.ReactNode;
  separator?: string;
}

function Breadcrumbs({ children, separator = "/" }: BreadcrumbsProps) {
  const childrenArray = Children.toArray(children);
  return (
    <div className={styles.container}>
      {Children.map(children, (child, index) => (
        <>
          {child}
          {index !== childrenArray.length - 1 && (
            <div className={styles.separator}>{separator}</div>
          )}
        </>
      ))}
    </div>
  );
}

export default Breadcrumbs;
