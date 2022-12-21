import styles from './product.module.scss';
import { Poster } from '@uikit/poster';
import { configuration } from '@/configuration';

const productDefaultImage = configuration.product.defaultImage;

export const ProductMinified = () => {
  return (
    <div className={styles['product-minified']}>
      <div className={styles['product-minified__poster']}>
        <Poster source={productDefaultImage} />
      </div>

      <div className={styles['product-minified__info']}>
        <div className={styles['product-minified__title']}>
          Nokia Magic Plus 500+
        </div>

        <div className={styles['product-minified__price-container']}>
          <div className={styles['product-minified__count']}>1</div>
          <div className={styles['product-minified__price']}>₦600000</div>
        </div>
      </div>
    </div>
  );
};
