import styles from './products.module.scss';
import { Badge } from '@uikit/badge';
import { IconRounded } from '@uikit/icon/_rounded';
import { Poster } from '@uikit/poster';
import { ButtonLink } from '@uikit/button/_link';
import { Button } from '@uikit/button';
import { configuration } from '@/configuration';

const productDefaultImage = configuration.product.defaultImage;

export const ProductsItem = ({ product }) => {
  return (
    <div className={styles['products__item']}>
      <div className={styles['products__item__header']}>
        <Badge type="secondary">-59%</Badge>
        <IconRounded
          variant="heart"
          color="accent"
          size="small"
          background="light"
        />
      </div>

      <Poster
        className={styles['products__item__poster']}
        source={productDefaultImage}
      />

      <div className={styles['products__item__price']}>
        <Badge>Audio Devices</Badge>
        <span>₦{product.price}</span>
      </div>

      <div className={styles['products__item__title']}>{product.name}</div>

      <div className={styles['products__item__actions']}>
        <ButtonLink>Add to Cart</ButtonLink>
        <Button size="large" variant="primary">
          Buy Now
        </Button>
      </div>
    </div>
  );
};
