import styles from './button.module.scss';

export const Button = ({
  children,
  className,
  onClick,
  variant = 'primary',
  size = 'small',
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${styles['button']}
        ${styles[`button_${variant}`]}
        ${styles[`button_${size}`]}
        ${className ?? ''}
      `}
    >
      {children}
    </button>
  );
};
