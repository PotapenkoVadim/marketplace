import styles from './product-list.module.scss';
import { Container } from '@components/common/container';
import { Products } from '@components/common/products';

export const MarketPlacePageProductList = () => {
  return (
    <div className={styles['product-list']}>
      <Container>
        <h1 className={styles['product-list__title']}>Our Porducts</h1>

        <Products />
      </Container>
    </div>
  );
};
