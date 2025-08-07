"use client";
import styles from "./header.module.css";
import { useState, useEffect } from "react";
import products from "@/data/products";

export default function Header() {

  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setTotalProducts(products.length);
  }, [products]);
  return (
    <div className={styles.header}>
      <h1>🛒 Loja de Eletrônicos</h1>
      <p>Os melhores produtos com os melhores preços!</p>
      <p>
        📊 Total de produtos: <span id="totalProducts">{totalProducts}</span>
      </p>
    </div>
  );
}
