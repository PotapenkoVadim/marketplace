import styles from './product.module.scss';
import { Poster } from '@uikit/poster';
import { configuration } from '@/configuration';

const productDefaultImage = configuration.product.defaultImage;

export const ProductMinified = ({ product, count }) => {
  return (
    <div className={styles['product-minified']}>
      <div className={styles['product-minified__poster']}>
        <Poster source={productDefaultImage} />
      </div>

      <div className={styles['product-minified__info']}>
        <div className={styles['product-minified__title']}>{product.name}</div>

        <div className={styles['product-minified__price-container']}>
          <div className={styles['product-minified__count']}>{count}</div>
          <div className={styles['product-minified__price']}>
            ₦{product.price}
          </div>
        </div>
      </div>
    </div>
  );
};
