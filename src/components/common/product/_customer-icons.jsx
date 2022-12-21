import styles from './product.module.scss';
import { IconRounded } from '@uikit/icon/_rounded';
import { useIsCustomer } from '@hooks';

export const ProductsCustomerIcons = ({ user, onLikeClick }) => {
  const isCustomer = useIsCustomer(user);

  return (
    <>
      {isCustomer && (
        <div className={styles['product__icons']}>
          <IconRounded
            variant={'heart'}
            className={styles['product__icon']}
            onClick={onLikeClick}
            color="accent"
            size="small"
            background="light"
          />
        </div>
      )}
    </>
  );
};
