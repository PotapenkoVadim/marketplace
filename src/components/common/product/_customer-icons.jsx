import styles from './product.module.scss';
import { IconRounded } from '@uikit/icon/_rounded';
import { useIsCustomer } from '@hooks';

export const ProductsCustomerIcons = ({ user }) => {
  const isCustomer = useIsCustomer(user);

  const handleCustomerClick = () => {};

  return (
    <>
      {isCustomer && (
        <div className={styles['product__icons']}>
          <IconRounded
            variant={'heart'}
            className={styles['product__icon']}
            onClick={handleCustomerClick}
            color="accent"
            size="small"
            background="light"
          />
        </div>
      )}
    </>
  );
};
