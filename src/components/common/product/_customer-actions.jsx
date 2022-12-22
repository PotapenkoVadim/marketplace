import styles from './product.module.scss';
import { ButtonLink } from '@uikit/button/_link';
import { Button } from '@uikit/button';
import { useIsCustomer } from '@hooks';
import { configuration } from '@/configuration';
import { useModalStore, useCartStore } from '@store';

const { dialogModal, notificationModal } = configuration.modal.types;

export const ProductCustomerActions = ({ user, product }) => {
  const addToCart = useCartStore((state) => state.add);
  const { open: openModal, close: closeModal } = useModalStore(
    (state) => state
  );

  const isCustomer = useIsCustomer(user);

  const openAddToCartModal = () => {
    openModal(dialogModal, {
      title: 'Do you want to add product to cart?',
      action: addProductToCart,
      buttonText: 'Correct',
    });
  };

  const addProductToCart = () => {
    addToCart(product.id, 1);
    closeModal(dialogModal);
  };

  const openBuyProductModal = () => {
    openModal(dialogModal, {
      title: 'Do you want to buy product?',
      action: buyProduct,
      buttonText: 'Correct',
    });
  };

  const buyProduct = () => {
    closeModal(dialogModal);
    openModal(notificationModal, {
      notification: `Congratulations! You've bought ${product.name}!`,
    });
  };

  return (
    <>
      {isCustomer && (
        <div className={styles['product__actions']}>
          <ButtonLink onClick={openAddToCartModal}>Add to Cart</ButtonLink>
          <Button onClick={openBuyProductModal} size="large" variant="primary">
            Buy Now
          </Button>
        </div>
      )}
    </>
  );
};
