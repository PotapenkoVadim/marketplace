import styles from './product-modal.module.scss';
import { useState, useEffect } from 'react';
import { Modal } from '@components/common/modal';
import { ProductForm } from '@components/common/product-form';
import { useModalStore } from '@store';
import { configuration } from '@/configuration';

const modalType = configuration.modal.types.productModal;

export const ProductModal = () => {
  const { data } = useModalStore((state) => state[modalType]);
  const [isUpdateProduct, setIsUpdateProduct] = useState(false);

  useEffect(() => {
    if (data?.product) {
      setIsUpdateProduct(
        Object.prototype.hasOwnProperty.call(data.product, 'name') &&
          data.product.name.length
      );
    }
  }, [data]);

  return (
    <Modal
      type={modalType}
      title={isUpdateProduct ? 'Update product' : 'Create new product'}
    >
      <div className={styles['product-modal']}>
        {data?.product && (
          <ProductForm
            buttonText={isUpdateProduct ? 'Update' : 'Add'}
            onSubmit={data.action}
            productForm={data.product}
          />
        )}
      </div>
    </Modal>
  );
};
