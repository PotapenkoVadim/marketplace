import styles from './products.module.scss';
import { Product } from '@components/common/product';

export const Products = ({ products = [] }) => {
  return (
    <div className={styles['products']}>
      {products.length > 0 &&
        products.map((product) => (
          <div className={styles['products__item']} key={product.id}>
            <Product product={product} />
          </div>
        ))}
    </div>
  );
};
