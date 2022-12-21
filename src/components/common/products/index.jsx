import styles from './products.module.scss';
import { Product } from '@components/common/product';

export const Products = ({ products = [] }) => {
  return (
    <div className={styles['products']}>
      {products.length > 0 &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
};
