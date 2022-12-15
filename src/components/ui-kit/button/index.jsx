import styles from './button.module.scss';

export const Button = ({ children, className, variant = 'primary', size = 'small' }) => {
  return (
    <button className={`
      ${styles['button']}
      ${styles[`button_${variant}`]}
      ${styles[`button_${size}`]}
      ${className ?? ''}
    `}>
      {children}
    </button>
  );
};