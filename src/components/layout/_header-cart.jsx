import styles from './layout.module.scss';
import { useState, useEffect } from 'react';
import { IconRounded } from '@uikit/icon/_rounded';
import { ProductMinified } from '@components/common/product/_minified';
import { DropDown } from '@uikit/drop-down';
import { Button } from '@uikit/button';
import { Notification } from '@uikit/notification';
import { useCartStore, useProductStore } from '@store';

export const LayoutHeaderCart = ({ isHideMenu }) => {
  const [menu, setMenu] = useState([]);

  const cart = useCartStore((state) => state.cart);
  const products = useProductStore((state) => state.products);

  useEffect(() => {
    if (cart.length) {
      const cartMenuList = cart.map((item) => {
        const product = products.find(
          (product) => product.id === item.productID
        );

        return {
          id: item.id,
          node: <ProductMinified product={product} count={item.count} />,
        };
      });

      setMenu([
        ...cartMenuList,
        {
          id: 2,
          node: <Button className={styles['layout__bag-button']}>Buy</Button>,
        },
      ]);
    } else {
      setMenu([
        {
          id: 1,
          node: <Notification text="Cart is empty" />,
        },
      ]);
    }
  }, [cart, products]);

  return (
    <DropDown isForciblyHide={isHideMenu} menu={menu}>
      <IconRounded
        className={styles['layout__header__bag']}
        variant="bag"
        color="white"
        size="large"
      />
    </DropDown>
  );
};
