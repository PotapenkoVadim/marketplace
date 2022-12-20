import styles from './product-list.module.scss';
import { Container } from '@components/common/container';
import { Products } from '@components/common/products';
import { IconRounded } from '@uikit/icon/_rounded';
import { useIsAdmin } from '@hooks';
import { useUserStore, useModalStore, useProductStore } from '@/store';
import { ProductModal } from '@components/common/product-modal';
import { configuration } from '@/configuration';
import { generateID } from '@/utils';

const productModalType = configuration.modal.types.productModal;
const defaultProduct = configuration.product.default;

export const MarketPlacePageProductList = () => {
  const user = useUserStore((state) => state.user);
  const { products, add: addNewProduct } = useProductStore((state) => state);
  const { open: openModal, close: closeModal } = useModalStore(
    (state) => state
  );

  const isAdmin = useIsAdmin(user);

  const openProductModal = () => {
    openModal(productModalType);
  };

  const createNewProduct = (data) => {
    const newProduct = {
      id: generateID(),
      ...data,
    };

    addNewProduct(newProduct);
    closeModal(productModalType);
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

        <Products products={products} />
      </Container>

      <ProductModal handleSubmit={createNewProduct} product={defaultProduct} />
    </div>
  );
};
