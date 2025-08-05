import styles from './products.module.css';
import Image from 'next/image';

export default function Products( {products}) {
  return (
    <div className={styles.products}>
      {products.map((product) => (
          <div className={styles.productCard} data-category={product.category} key={product.id}>
            <div className={styles.productImage}>
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.productTitle}>{product.title}</div>
            <div className={styles.productPrice}>{product.price}</div>
            <div className={styles.productDescription}>
              {product.description}
            </div>
            <div className={styles.productRating}>
              <span className={styles.stars}>{product.rating.stars}</span>
              <span>{product.rating.reviews}</span>
            </div>
          </div>
        ))}
    </div>
  )
}
