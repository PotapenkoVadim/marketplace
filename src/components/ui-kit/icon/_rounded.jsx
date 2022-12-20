import styles from './icon.module.scss';
import { Icon } from './index';

export const IconRounded = ({
  variant,
  color,
  size,
  className,
  onClick,
  background = 'accent',
}) => {
  return (
    <div
      onClick={onClick}
      className={`
      ${styles['rounded-icon']}
      ${styles[`rounded-icon_${size}`]}
      ${styles[`rounded-icon_${background}`]}
      ${className ?? ''}
    `}
    >
      <Icon variant={variant} color={color} />
    </div>
  );
};
