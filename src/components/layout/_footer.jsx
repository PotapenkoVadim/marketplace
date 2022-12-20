import styles from './layout.module.scss';
import { Container } from '@components/common/container';
import { Navigation } from '@components/common/navigation';
import { IconRounded } from '@uikit/icon/_rounded';
import { configuration } from '@/configuration';

const firstRoutes = configuration.routes;
const secondRoutes = configuration.additionalRoutes;

export const LayoutFooter = () => {
  return (
    <footer className={styles['layout__footer']}>
      <Container className={styles['layout__footer-container']}>
        <div className={styles['layout__col']}>
          <h3 className={styles['layout__footer-title']}>Your company</h3>
          <div>
            Our mission is to make gadjet purchase, accessible and affordable.
          </div>
        </div>

        <div className={styles['layout__col']}>
          <div className={styles['layout_left']}>
            <h3 className={styles['layout__footer-title']}>Helpful Links</h3>
            <Navigation
              className={styles['layout__footer-navigation']}
              routes={firstRoutes}
              direction="col"
            />
          </div>
        </div>

        <div className={styles['layout__col']}>
          <h3 className={styles['layout__footer-title']}>Site Map</h3>
          <Navigation
            className={styles['layout__footer-navigation']}
            routes={secondRoutes}
            direction="col"
          />
        </div>

        <div className={styles['layout__col']}>
          <h3 className={styles['layout__footer-title']}>Contact Us</h3>
          <div className={styles['layout__social']}>
            <IconRounded
              variant="facebook"
              color="accent"
              size="small"
              background="light"
            />
            <IconRounded
              variant="twitter"
              color="accent"
              size="small"
              background="light"
            />
            <IconRounded
              variant="instagram"
              color="accent"
              size="small"
              background="light"
            />
            <IconRounded
              variant="linkedin"
              color="accent"
              size="small"
              background="light"
            />
          </div>
          <div>hello@yourcompany.com</div>
        </div>
      </Container>
    </footer>
  );
};
