import styles from './products.module.scss';
import { ProductsItem } from './_item';

export const Products = ({ products = [] }) => {
  return (
    <div className={styles['products']}>
      {products.length > 0 &&
        products.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
    </div>
  );
};
