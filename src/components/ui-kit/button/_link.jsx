import styles from './button.module.scss';
import { Icon } from '@uikit/icon';

export const ButtonLink = ({
  children,
  className,
  onClick,
  href,
  color = 'primary',
  iconVariant = null
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${styles['button-link']} ${styles[`button-link_${color}`]} ${className ?? ''}`}
    >
      <span>{children}</span>
      {iconVariant && <Icon className={styles['button-link__icon']} variant={iconVariant} color={color} />}
    </a>
  );
};