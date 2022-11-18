import Link from "next/link";
import React from "react";
import links from "../lib/footerLinks";
import styles from "../styles/components/Footer.module.scss";
import Tag from "./Tag";

function Footer({ tags }: { tags: { id: number; title: string }[] }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {links.map((link, index) => (
          <Links menu={link} key={index} />
        ))}
      </div>
      <div className={styles.middle}>
        <p className={styles.title}>Product tags</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <Tag key={tag.id} title={tag.title} />
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          Copyright &copy; 2022 ismatullayevpro@gmail.com
        </p>
      </div>
    </footer>
  );
}

function Links({
  menu,
}: {
  menu: { title: string; links: { title: string; href: string }[] };
}) {
  return (
    <div className={styles.links}>
      <p className={styles.title}>{menu.title}</p>
      <ul>
        {menu.links.map((link, index) => (
          <li key={index} className={styles.link}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
