import styles from './logo.module.scss';

export const Logo = ({ className }) => {
  return (
    <a className={`${styles['logo']} ${className ?? ''}`} href='/'>
      <span className={styles['logo__image']} />
    </a>
  );
};