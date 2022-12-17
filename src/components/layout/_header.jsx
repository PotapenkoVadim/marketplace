import styles from './layout.module.scss';
import { useRef, useState, useEffect } from 'react';
import { Container } from '@components/common/container';
import { Logo } from '@uikit/logo';
import { Navigation } from '@components/common/navigation';
import { IconRounded } from '@uikit/icon/_rounded';
import { Avatar } from '@uikit/avatar';
import { configuration } from '@/configuration';
import { useHeaderHiding } from '@hooks';
import { useUserStore } from '@/store';

import img from '../../static/avatar.png';

const routes = configuration.routes;

export const LayoutHeader = () => {
  const refHeader = useRef(null);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const user = useUserStore((state) => state.user);
  useEffect(() => {
    console.log(user);
  }, [])

  useHeaderHiding(refHeader);

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
          <IconRounded
            className={styles['layout__header__bag']}
            variant='bag'
            color='white'
            size='large' />

          <Avatar
            className={styles['layout__avatar']}
            link={img} />

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