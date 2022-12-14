import styles from './icon.module.scss';
import { Icon } from './index';

export const IconRounded = ({ variant, color, size, background='accent' }) => {
  return (
    <div className={`
      ${styles['rounded-icon']}
      ${styles[`rounded-icon_${size}`]}
      ${styles[`rounded-icon_${background}`]}
    `}>
      <Icon variant={variant} color={color} />
    </div>
  );
};