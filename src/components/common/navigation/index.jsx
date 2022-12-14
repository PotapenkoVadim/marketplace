import styles from './navigation.module.scss';
import { NavigationLink } from './_link';

export const Navigation = ({ className, routes }) => {
  return (
    <nav className={`${styles['navigation']} ${className ?? ''}`}>
      {routes.length > 0 && (
        routes.map(({name, path}) => <NavigationLink key={name} to={path}>{name}</NavigationLink>)
      )}
    </nav>
  );
};