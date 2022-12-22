import styles from './product.module.scss';
import { Badge } from '@uikit/badge';
import { Poster } from '@uikit/poster';
import { configuration } from '@/configuration';
import { useUserStore } from '@store';
import { ProductsAdminIcons } from './_admin-icons';
import { ProductsCustomerIcons } from './_customer-icons';
import { ProductCustomerActions } from './_customer-actions';

const productDefaultImage = configuration.product.defaultImage;

export const Product = ({ product, className }) => {
  const user = useUserStore((state) => state.user);

  return (
    <div className={`${styles['product']} ${className ?? ''}`}>
      <div className={styles['product__header']}>
        <Badge type="secondary">-59%</Badge>
        <ProductsAdminIcons user={user} product={product} />
        <ProductsCustomerIcons user={user} />
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
      <ProductCustomerActions product={product} user={user} />
    </div>
  );
};
