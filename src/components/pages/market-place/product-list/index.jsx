import styles from './product-list.module.scss';
import { Container } from '@components/common/container';
import { Products } from '@components/common/products';
import { IconRounded } from '@uikit/icon/_rounded';
import { useIsAdmin } from '@hooks';
import { useUserStore, useModalStore } from '@/store';
import { ProductModal } from '@components/common/product-modal';

export const MarketPlacePageProductList = () => {
  const openModal = useModalStore((state) => state.open);
  const user = useUserStore((state) => state.user);

  const isAdmin = useIsAdmin(user);

  const openProductModal = () => {
    openModal('productModal');
  };

  return (
    <div className={styles['product-list']}>
      <Container>
        <div className={styles['product-list__header']}>
          <h1 className={styles['product-list__title']}>Our Porducts</h1>

          {isAdmin && (
            <IconRounded
              onClick={openProductModal}
              className={styles['product-list__add']}
              variant="add"
              color="white"
              size="small"
              background="accent"
            />
          )}
        </div>

        <Products />
      </Container>

      <ProductModal />
    </div>
  );
};
