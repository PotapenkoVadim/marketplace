import styles from './product.module.scss';
import { IconRounded } from '@uikit/icon/_rounded';
import { useIsAdmin } from '@hooks';
import { configuration } from '@/configuration';
import { useModalStore, useProductStore, useCartStore } from '@store';

const { productModal: productModalType, dialogModal } =
  configuration.modal.types;

export const ProductsAdminIcons = ({ user, product }) => {
  const removeProductFromCart = useCartStore((state) => state.remove);
  const { update: updateProduct, delete: deleteProduct } = useProductStore(
    (state) => state
  );
  const { open: openModal, close: closeModal } = useModalStore(
    (state) => state
  );

  const isAdmin = useIsAdmin(user);

  const openEditProductModal = () => {
    openModal(productModalType, {
      action: updateProductItem,
      product,
    });
  };

  const openDeleteProductModal = () => {
    openModal(dialogModal, {
      title: 'Are you sure you want to delete the product?',
      action: deleteProductItem,
    });
  };

  const deleteProductItem = () => {
    deleteProduct(product.id);
    removeProductFromCart(product.id);
    closeModal(dialogModal);
  };

  const updateProductItem = (data) => {
    updateProduct(data.id, data);
    closeModal(productModalType);
  };

  return (
    <>
      {isAdmin && (
        <div className={styles['product__icons']}>
          <IconRounded
            variant={'edit'}
            className={styles['product__icon']}
            onClick={openEditProductModal}
            color="accent"
            size="small"
            background="light"
          />

          <IconRounded
            variant={'delete'}
            className={styles['product__icon']}
            onClick={openDeleteProductModal}
            color="secondary"
            size="small"
            background="secondary"
          />
        </div>
      )}
    </>
  );
};
