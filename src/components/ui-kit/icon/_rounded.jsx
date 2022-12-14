import styles from './icon.module.scss';
import { Icon } from './index';

export const IconRounded = ({ variant, color, size }) => {
  return (
    <div className={`${styles['rounded-icon']} ${styles[`rounded-icon_${size}`]}`}>
      <Icon variant={variant} color={color} />
    </div>
  );
};