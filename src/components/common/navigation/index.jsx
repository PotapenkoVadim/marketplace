import styles from './navigation.module.scss';
import { NavigationLink } from './_link';

export const Navigation = ({ className, routes, direction='row' }) => {
  return (
    <nav className={`
      ${styles['navigation']}
      ${styles[`navigation_${direction}`]}
      ${className ?? ''}
    `}>
      {routes.length > 0 && (
        routes.map(({name, path}) => <NavigationLink key={name} to={path}>{name}</NavigationLink>)
      )}
    </nav>
  );
};