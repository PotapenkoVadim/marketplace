import styles from './button.module.scss';

export const ButtonLink = ({ children }) => {
  return (
    <span className={styles['button__link']}>{children}</span>
  );
};