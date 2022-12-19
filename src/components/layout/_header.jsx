import styles from './layout.module.scss';
import { useRef, useState } from 'react';
import { Container } from '@components/common/container';
import { Logo } from '@uikit/logo';
import { Navigation } from '@components/common/navigation';
import { IconRounded } from '@uikit/icon/_rounded';
import { configuration } from '@/configuration';
import { useHeaderHiding, useIsCustomer } from '@hooks';
import { LayoutHeaderAvatar } from './_header-avatar';
import { useUserStore } from '@/store';

const routes = configuration.routes;

export const LayoutHeader = () => {
  const refHeader = useRef(null);

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const user = useUserStore((state) => state.user);

  const isCustomer = useIsCustomer(user);
  const isHeaderHide = useHeaderHiding(refHeader);

  function handleClickMobileMenu() {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  }

  return (
    <header ref={refHeader} className={styles['layout__header']}>
      <Container className={styles['layout__header-container']}>
        <div className={styles['layout__logo']}>
          <Logo />
        </div>

        <Navigation
          routes={routes}
          className={`
            ${styles['layout__header-navigation']}
            ${isOpenMobileMenu ? styles['layout__header-navigation_open'] : ''}
          `} />

        <div className={styles['layout__actions']}>
          {isCustomer && (
            <IconRounded
              className={styles['layout__header__bag']}
              variant='bag'
              color='white'
              size='large' />
          )}

          <LayoutHeaderAvatar isHideMenu={isHeaderHide} />

          <IconRounded
            onClick={handleClickMobileMenu}
            className={styles['layout__header__menu']}
            variant={isOpenMobileMenu ? 'close' : 'menu'}
            color='white'
            size='large' />
        </div>
      </Container>
    </header>
  );
};