import styles from './products.module.scss';
import { ProductsItem } from './_item';

export const Products = () => {
  return (
    <div className={styles['products']}>
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
    </div>
  );
};