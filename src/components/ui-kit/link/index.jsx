import styles from './link.module.scss';
import { Link as RouterLink } from 'react-router/match';

export const Link = ({ children, to, onClick }) => {
  return (
    <RouterLink
      onClick={onClick}
      className={styles['link']}
      activeClassName={styles['link_active']}
      href={to} >
      {children}
    </RouterLink>
  );
};