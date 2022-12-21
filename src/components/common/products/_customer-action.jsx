import styles from './products.module.scss';
import { IconRounded } from '@uikit/icon/_rounded';

export const ProductsCustomerAction = ({ onLikeClick }) => {
  return (
    <div className={styles['products__item__icon-actions']}>
      <IconRounded
        variant={'heart'}
        className={styles['products__item__icon']}
        onClick={onLikeClick}
        color="accent"
        size="small"
        background="light"
      />
    </div>
  );
};
