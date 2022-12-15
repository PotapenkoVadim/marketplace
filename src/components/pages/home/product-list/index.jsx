import styles from './product-list.module.scss';
import { Container } from '@components/common/container';
import { TitleInvitation } from '@components/common/title-invitation';
import { Products } from '@components/common/products';

export const HomePageProductList = ({ title }) => {
  return (
    <div className={styles['product-list']}>
      <div className={styles['product-list__header']}>
        <Container>
          <TitleInvitation title={title} textLink='Explore' link='#' />
        </Container>
      </div>

      <Container>
        <div className={styles['product-list__content']}>
          <Products />
        </div>
      </Container>
    </div>
  )
};