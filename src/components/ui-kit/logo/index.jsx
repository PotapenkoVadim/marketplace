import styles from './logo.module.scss';
import { configuration } from '@/configuration';

export const Logo = ({ className }) => {
  return (
    <a
      className={`${styles['logo']} ${className ?? ''}`}
      href={configuration.paths.home}
    >
      <span className={styles['logo__image']} />
    </a>
  );
};
