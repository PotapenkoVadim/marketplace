import styles from './product-modal.module.scss';
import { Modal } from '@components/common/modal';
import { ProductForm } from '@components/common/product-form';

export const ProductModal = ({ handleSubmit, product }) => {
  return (
    <Modal type="productModal" title="Create new product">
      <div className={styles['product-modal']}>
        <ProductForm onSubmit={handleSubmit} productForm={product} />
      </div>
    </Modal>
  );
};
