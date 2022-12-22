import styles from './layout.module.scss';
import { useState, useEffect } from 'react';
import { IconRounded } from '@uikit/icon/_rounded';
import { ProductMinified } from '@components/common/product/_minified';
import { DropDown } from '@uikit/drop-down';
import { Button } from '@uikit/button';
import { Notification } from '@uikit/notification';
import { useCartStore, useProductStore, useModalStore } from '@store';
import { configuration } from '@/configuration';

const { dialogModal, notificationModal } = configuration.modal.types;

export const LayoutHeaderCart = ({ isHideMenu }) => {
  const [menu, setMenu] = useState([]);

  const { cart, clear: clearProdcutInCart } = useCartStore((state) => state);
  const products = useProductStore((state) => state.products);
  const { open: openModal, close: closeModal } = useModalStore(
    (state) => state
  );

  const openBuyProductsModal = () => {
    openModal(dialogModal, {
      title: 'Do you want to buy selected products?',
      action: buyProducts,
      buttonText: 'Correct',
    });
  };

  const buyProducts = () => {
    const productsPrice = cart.reduce((acc, item) => {
      const findedProduct = products.find(
        (product) => product.id === item.productID
      );
      if (findedProduct) {
        acc += Number(findedProduct.price) * item.count;
      }

      return acc;
    }, 0);

    clearProdcutInCart();
    closeModal(dialogModal);
    openModal(notificationModal, {
      notification: `Congratulations! You bought products for ₦${productsPrice}!`,
    });
  };

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
          id: 'buy',
          node: (
            <Button
              onClick={openBuyProductsModal}
              className={styles['layout__bag-button']}
            >
              Buy
            </Button>
          ),
        },
        {
          id: 'clear',
          node: (
            <Button
              variant="secondary"
              onClick={clearProdcutInCart}
              className={styles['layout__bag-button']}
            >
              Clear
            </Button>
          ),
        },
      ]);
    } else {
      setMenu([
        {
          id: 'notification',
          node: <Notification text="Cart is empty" />,
        },
      ]);
    }
  }, [cart, products, clearProdcutInCart]);

  return (
    <DropDown
      contentClassName={styles['layout__dropdown']}
      isForciblyHide={isHideMenu}
      menu={menu}
    >
      <IconRounded
        className={styles['layout__header__bag']}
        variant="bag"
        color="white"
        size="large"
      />
    </DropDown>
  );
};
