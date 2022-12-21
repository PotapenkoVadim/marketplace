import styles from './product.module.scss';
import { Badge } from '@uikit/badge';
import { Poster } from '@uikit/poster';
import { configuration } from '@/configuration';
import {
  useUserStore,
  useModalStore,
  useProductStore,
  useCartStore,
} from '@/store';
import { ProductsAdminIcons } from './_admin-icons';
import { ProductsCustomerIcons } from './_customer-icons';
import { ProductCustomerActions } from './_customer-actions';

const productDefaultImage = configuration.product.defaultImage;
const { productModal: productModalType, dialogModal } =
  configuration.modal.types;

export const Product = ({ product, className }) => {
  const user = useUserStore((state) => state.user);
  const addToCart = useCartStore((state) => state.add);
  const { update: updateProduct, delete: deleteProduct } = useProductStore(
    (state) => state
  );
  const { open: openModal, close: closeModal } = useModalStore(
    (state) => state
  );

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

  return (
    <div className={`${styles['product']} ${className ?? ''}`}>
      <div className={styles['product__header']}>
        <Badge type="secondary">-59%</Badge>

        <ProductsAdminIcons
          user={user}
          onDeleteClick={openDeleteProductModal}
          onEditClick={openProductModal}
        />

        <ProductsCustomerIcons user={user} onLikeClick={handleCustomerClick} />
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
      <ProductCustomerActions onAddToCart={openAddToCartModal} user={user} />
    </div>
  );
};
