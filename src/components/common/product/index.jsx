import styles from './product.module.scss';
import { Badge } from '@uikit/badge';
import { Poster } from '@uikit/poster';
import { ButtonLink } from '@uikit/button/_link';
import { Button } from '@uikit/button';
import { configuration } from '@/configuration';
import { useUserStore, useModalStore, useProductStore } from '@/store';
import { useIsAdmin } from '@hooks';
import { ProductsAdminAction } from './_admin-action';
import { ProductsCustomerAction } from './_customer-action';

const productDefaultImage = configuration.product.defaultImage;
const { productModal: productModalType, dialogModal } =
  configuration.modal.types;

export const Product = ({ product }) => {
  const user = useUserStore((state) => state.user);
  const { update: updateProduct, delete: deleteProduct } = useProductStore(
    (state) => state
  );
  const { open: openModal, close: closeModal } = useModalStore(
    (state) => state
  );

  const isAdmin = useIsAdmin(user);

  const openProductModal = () => {
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
    closeModal(dialogModal);
  };

  const updateProductItem = (data) => {
    updateProduct(data.id, data);
    closeModal(productModalType);
  };

  const handleCustomerClick = () => {};

  return (
    <div className={styles['product']}>
      <div className={styles['product__header']}>
        <Badge type="secondary">-59%</Badge>

        {isAdmin ? (
          <ProductsAdminAction
            onDeleteClick={openDeleteProductModal}
            onEditClick={openProductModal}
          />
        ) : (
          <ProductsCustomerAction onLikeClick={handleCustomerClick} />
        )}
      </div>

      <Poster
        className={styles['product__poster']}
        source={productDefaultImage}
      />

      <div className={styles['product__price']}>
        <Badge>Audio Devices</Badge>
        <span>₦{product.price}</span>
      </div>

      <div className={styles['product__title']}>{product.name}</div>

      <div className={styles['product__actions']}>
        <ButtonLink>Add to Cart</ButtonLink>
        <Button size="large" variant="primary">
          Buy Now
        </Button>
      </div>
    </div>
  );
};
