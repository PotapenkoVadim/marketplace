import styles from './product.module.scss';
import { IconRounded } from '@uikit/icon/_rounded';

export const ProductsCustomerAction = ({ onLikeClick }) => {
  return (
    <div className={styles['product__icon-actions']}>
      <IconRounded
        variant={'heart'}
        className={styles['product__icon']}
        onClick={onLikeClick}
        color="accent"
        size="small"
        background="light"
      />
    </div>
  );
};
