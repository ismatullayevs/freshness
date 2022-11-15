import React from "react";
import styles from "../styles/components/Badge.module.scss";

function Badge({ children }: React.PropsWithChildren) {
  return <div className={styles.badge}>{children}</div>;
}

export default Badge;
