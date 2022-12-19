import styles from './link.module.scss';
import { Link as RouterLink } from 'react-router/match';

export const Link = ({ children, to }) => {
  return (
    <RouterLink 
      className={styles['link']}
      activeClassName={styles['link_active']}
      href={to} >
      {children}
    </RouterLink>
  );
};