import styles from './layout.module.scss';
import { Container } from '@components/common/container';
import { Logo } from '@uikit/logo';
import { Navigation } from '@components/common/navigation';
import { IconRounded } from '@uikit/icon/_rounded';
import { Avatar } from '@uikit/avatar';
import { configuration } from '@/configuration';

import img from '../../static/avatar.png';

const routes = configuration.routes;

export const LayoutHeader = () => {
  return (
    <header className={styles['layout__header']}>
      <Container className={styles['layout__container']}>
        <div className={styles['layout__logo']}>
          <Logo />
        </div>

        <Navigation
          routes={routes}
          className={styles['layout__navigation']} />

        <div className={styles['layout__actions']}>
          <IconRounded variant='bag' color='white' size='large' />
          <Avatar className={styles['layout__avatar']} link={img} />
        </div>
      </Container>
    </header>
  );
};