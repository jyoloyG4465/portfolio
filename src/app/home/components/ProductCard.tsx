import React from "react";
import styles from "./ProductCard.module.scss";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  url: string;
};

const ProductCard: React.FC<Props> = ({ title, description, url }) => {
  return (
    <Link href={url} className={styles.card}>
      <div>
        <div className={styles.title}>{title}</div>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
