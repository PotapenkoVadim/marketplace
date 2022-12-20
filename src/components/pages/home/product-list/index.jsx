import styles from './product-list.module.scss';
import { Container } from '@components/common/container';
import { TitleInvitation } from '@components/common/title-invitation';
import { Products } from '@components/common/products';
import { useProductStore } from '@store';

export const HomePageProductList = ({ title, id }) => {
  const products = useProductStore((state) => state.products);

  return (
    <div id={id} className={styles['product-list']}>
      {products.length > 0 && (
        <>
          <div className={styles['product-list__header']}>
            <Container>
              <TitleInvitation title={title} textLink="Explore" link="#" />
            </Container>
          </div>

          <Container>
            <div className={styles['product-list__content']}>
              <Products products={products} />
            </div>
          </Container>
        </>
      )}
    </div>
  );
};
