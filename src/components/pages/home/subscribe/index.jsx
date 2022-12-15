import styles from './subscribe.module.scss';
import { Container } from '@components/common/container';
import { ButtonField } from '@uikit/button-field';

export const HomePageSubscribe = () => {
  return (
    <Container>
      <div className={styles['subscribe']}>
        <h2 className={styles['subscribe__title']}>Subscribe to Our Newsletter</h2>
        <div className={styles['subscribe__subtitle']}>
          Don't miss out on our top deals! Dont worry we will not spam you.
        </div>

        <ButtonField
          placeholder='Enter your Email Here'
          textButton='Subscribe'
          className={styles['subscribe__button-field']} />
      </div>
    </Container>
  );
};