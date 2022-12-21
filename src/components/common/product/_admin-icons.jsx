import styles from './product.module.scss';
import { IconRounded } from '@uikit/icon/_rounded';
import { useIsAdmin } from '@hooks';

export const ProductsAdminIcons = ({ user, onEditClick, onDeleteClick }) => {
  const isAdmin = useIsAdmin(user);

  return (
    <>
      {isAdmin && (
        <div className={styles['product__icons']}>
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
      )}
    </>
  );
};
