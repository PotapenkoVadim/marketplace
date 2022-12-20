import styles from './products.module.scss';
import { Badge } from '@uikit/badge';
import { IconRounded } from '@uikit/icon/_rounded';
import { Poster } from '@uikit/poster';
import { ButtonLink } from '@uikit/button/_link';
import { Button } from '@uikit/button';
import { configuration } from '@/configuration';
import { useUserStore, useModalStore, useProductStore } from '@/store';
import { useIsAdmin } from '@hooks';

const productDefaultImage = configuration.product.defaultImage;
const productModalType = configuration.modal.types.productModal;

export const ProductsItem = ({ product }) => {
  const user = useUserStore((state) => state.user);
  const updateProduct = useProductStore((state) => state.update);
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

  const updateProductItem = (data) => {
    updateProduct(data.id, data);
    closeModal(productModalType);
  };

  const handleCustomerClick = () => {};

  return (
    <div className={styles['products__item']}>
      <div className={styles['products__item__header']}>
        <Badge type="secondary">-59%</Badge>

        <IconRounded
          variant={isAdmin ? 'edit' : 'heart'}
          className={styles['products__item__icon']}
          onClick={isAdmin ? openProductModal : handleCustomerClick}
          color="accent"
          size="small"
          background="light"
        />
      </div>

      <Poster
        className={styles['products__item__poster']}
        source={productDefaultImage}
      />

      <div className={styles['products__item__price']}>
        <Badge>Audio Devices</Badge>
        <span>₦{product.price}</span>
      </div>

      <div className={styles['products__item__title']}>{product.name}</div>

      <div className={styles['products__item__actions']}>
        <ButtonLink>Add to Cart</ButtonLink>
        <Button size="large" variant="primary">
          Buy Now
        </Button>
      </div>
    </div>
  );
};
