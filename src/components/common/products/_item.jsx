import styles from './products.module.scss';
import { Badge } from '@uikit/badge';
import { IconRounded } from '@uikit/icon/_rounded';
import { Poster } from '@uikit/poster';
import { ButtonLink } from '@uikit/button/_link';
import { Button } from '@uikit/button';

import productImg from '../../../static/test-product.png';

export const ProductsItem = () => {
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
        source={productImg}
      />

      <div className={styles['products__item__price']}>
        <Badge>Audio Devices</Badge>
        <span>₦600,000</span>
      </div>

      <div className={styles['products__item__title']}>
        Nokia Essential Wireless Headphones 120CM BLACK
      </div>

      <div className={styles['products__item__actions']}>
        <ButtonLink>Add to Cart</ButtonLink>
        <Button size="large" variant="primary">
          Buy Now
        </Button>
      </div>
    </div>
  );
};
