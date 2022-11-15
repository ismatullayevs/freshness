import Link from "next/link";
import React from "react";
import styles from "../styles/components/Navbar.module.scss";
import Search from "./Search";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import Badge from "./Badge";
import NavLinks from "./NavLinks";
import { ICategory } from "../types";

function Navbar({ categories }: { categories: ICategory[] }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.top}>
          <p className={styles.contacts}>
            <Link href="/chat" className={styles.chat}>
              Chat with us
            </Link>
            <span>+420 336 775 664</span>
            <span>info@freshness.com</span>
          </p>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={styles.link}>
              <Link href="/about">About Us</Link>
            </li>
            <li className={styles.link}>
              <Link href="/careers">Careers</Link>
            </li>
          </ul>
        </div>

        <div className={styles.middle}>
          <Link href="/" className={styles.brand}>
            <p className={styles.logo}>Freshness</p>
          </Link>
          <Search categories={categories} />
          <div className={styles.icons}>
            <Link href="/profile">
              <AiOutlineUser />
            </Link>
            <Link href="/cart">
              <button className={styles.badgeIcon}>
                <AiOutlineShoppingCart />
                <Badge>4</Badge>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <nav className={styles.container}>
          <NavLinks categories={categories} />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
