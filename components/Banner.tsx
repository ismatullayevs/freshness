import styles from "../styles/components/Banner.module.scss";
import React from "react";
import Link from "next/link";

interface BannerProps {
  title: string;
  heading: string;
  link: {
    title: string;
    href: string;
  };
  backgroundImage?: string;
}

function Banner({ title, heading, link, backgroundImage }: BannerProps) {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <h3 className={styles.heading}>{heading}</h3>
      </div>
      <Link href={link.href} className={styles.link}>
        {link.title}
      </Link>
    </div>
  );
}

export default Banner;
