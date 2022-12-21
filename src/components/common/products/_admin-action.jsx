import styles from './products.module.scss';
import { IconRounded } from '@uikit/icon/_rounded';

export const ProductsAdminAction = ({ onEditClick, onDeleteClick }) => {
  return (
    <div className={styles['products__item__icon-actions']}>
      <IconRounded
        variant={'edit'}
        className={styles['products__item__icon']}
        onClick={onEditClick}
        color="accent"
        size="small"
        background="light"
      />

      <IconRounded
        variant={'delete'}
        className={styles['products__item__icon']}
        onClick={onDeleteClick}
        color="secondary"
        size="small"
        background="secondary"
      />
    </div>
  );
};
