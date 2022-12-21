import styles from './layout.module.scss';
import { IconRounded } from '@uikit/icon/_rounded';
import { ProductMinified } from '@components/common/product/_minified';
import { DropDown } from '@uikit/drop-down';
import { Button } from '@uikit/button';

const menu = [
  {
    id: 1,
    node: <ProductMinified />,
  },
  {
    id: 2,
    node: <Button className={styles['layout__bag-button']}>Buy</Button>,
  },
];

export const LayoutHeaderCart = ({ isHideMenu }) => {
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
