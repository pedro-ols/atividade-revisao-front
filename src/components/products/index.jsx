import styles from './products.module.css';
import ProductCard from '../productCard';
import Image from 'next/image';

export default function Products( {products}) {
  return (
    <div className={styles.products}>
      {products.map((product, index) => (
          <ProductCard product={product} key={index}/>
        ))}
    </div>
  )
}
