import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/components/Card.module.scss";
import { IItem } from "../types/types";

interface CardProps {
  item: IItem;
}

function Card({ item }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {item.discount && (
          <span className={styles.discount}>-{item.discount}%</span>
        )}
        <Image src={item.image} alt="Product image" width={300} height={300} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.bottom}>
          <p className={styles.price}>{item.price} USD</p>
          <Link href="#" className={styles.buy}>
            Buy now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
