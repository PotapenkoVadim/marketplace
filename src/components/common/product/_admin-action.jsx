import styles from './product.module.scss';
import { IconRounded } from '@uikit/icon/_rounded';

export const ProductsAdminAction = ({ onEditClick, onDeleteClick }) => {
  return (
    <div className={styles['product__icon-actions']}>
      <IconRounded
        variant={'edit'}
        className={styles['product__icon']}
        onClick={onEditClick}
        color="accent"
        size="small"
        background="light"
      />

      <IconRounded
        variant={'delete'}
        className={styles['product__icon']}
        onClick={onDeleteClick}
        color="secondary"
        size="small"
        background="secondary"
      />
    </div>
  );
};
