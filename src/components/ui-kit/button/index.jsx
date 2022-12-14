import styles from './button.module.scss';

export const Button = ({ children, variant, className }) => {
  return (
    <button className={`${styles['button']} ${styles[`button_${variant}`]} ${className ?? ''}`}>
      {children}
    </button>
  );
};