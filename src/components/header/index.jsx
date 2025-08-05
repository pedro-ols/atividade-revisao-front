import styles from "./header.module.css";

export default function Header({ productsQuant }) {
  return (
    <div className={styles.header}>
      <h1>🛒 Loja de Eletrônicos</h1>
      <p>Os melhores produtos com os melhores preços!</p>
      <p>
        📊 Total de produtos: <span id="totalProducts">{productsQuant}</span>
      </p>
    </div>
  );
}
