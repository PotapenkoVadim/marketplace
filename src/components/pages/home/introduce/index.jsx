import styles from './introduce.module.scss';
import { Poster } from '@uikit/poster';
import { Button } from '@uikit/button';
import { ButtonLink } from '@uikit/button/_link';
import { Container } from '@components/common/container';

import poster from '../../../../static/introduce.png';

export const HomePageIntroduce = () => {
  return (
    <Container>
      <div className={styles['introduce']}>
        <div className={styles['introduce__info']}>
          <div className={styles['introduce__subtitle']}>WE’RE STILL</div>
          <h1 className={styles['introduce__title']}>Filling&nbsp;up the&nbsp;spaces.</h1>
          <div className={styles['introduce__actions']}>
            <Button variant='primary'>Explore Marketplace</Button>
            <ButtonLink>See Top Deals</ButtonLink>
          </div>
        </div>

        <div className={styles['introduce__poster-container']}>
          <Poster className={styles['introduce__poster']} source={poster} />
        </div>
      </div>
    </Container>
  );
};