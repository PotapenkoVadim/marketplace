import styles from './navigation.module.scss';
import { Link } from '@uikit/link';

export const Navigation = ({ className, routes, direction='row' }) => {
  return (
    <nav className={`
      ${styles['navigation']}
      ${styles[`navigation_${direction}`]}
      ${className ?? ''}
    `}>
      {routes.length > 0 && (
        routes.map(({name, path}) => <Link key={name} to={path}>{name}</Link>)
      )}
    </nav>
  );
};