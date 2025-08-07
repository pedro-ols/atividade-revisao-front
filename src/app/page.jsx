import styles from "./page.module.css";
import Products from "../components/products";
import products from "../data/products.js";

export default function Home() {
  
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        <Products products={products} />
      </div>
    </div>
  );
}
