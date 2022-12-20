import styles from './introduce.module.scss';
import { route } from 'react-router';
import { Poster } from '@uikit/poster';
import { Button } from '@uikit/button';
import { ButtonLink } from '@uikit/button/_link';
import { Container } from '@components/common/container';
import { configuration } from '@/configuration';

const homePagePoster = configuration.homePage.poster;
const marketPlacePage = configuration.paths.marketplace;
const topDealsSectionID = configuration.homePage.sectionIDs.topDeals;

export const HomePageIntroduce = () => {
  const goToMarketPlace = () => {
    route(marketPlacePage, true);
  };

  return (
    <div className={styles['introduce']}>
      <Container className={styles['introduce__info']}>
        <div className={styles['introduce__subtitle']}>WE’RE STILL</div>
        <h1 className={styles['introduce__title']}>
          Filling up
          <br />
          the spaces.
        </h1>
        <div className={styles['introduce__actions']}>
          <Button onClick={goToMarketPlace} variant="primary">
            Explore Marketplace
          </Button>

          <ButtonLink
            href={`#${topDealsSectionID}`}
            className={styles['introduce__link']}
          >
            See Top Deals
          </ButtonLink>
        </div>
      </Container>

      <Poster className={styles['introduce__poster']} source={homePagePoster} />
    </div>
  );
};
