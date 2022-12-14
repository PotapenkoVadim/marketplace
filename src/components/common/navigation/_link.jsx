import styles from './navigation.module.scss';
import { Link } from 'react-router/match';

export const NavigationLink = ({ children, to }) => {
  return (
    <Link 
      className={styles['navigation__link']}
      activeClassName={styles['navigation__link_active']}
      href={to} >
      {children}
    </Link>
  );
};