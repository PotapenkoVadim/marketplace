import styles from './badge.module.scss';

export const Badge = ({ children, type = 'primary' }) => {
  return (
    <span className={`${styles['badge']} ${styles[`badge_${type}`]}`}>
      {children}
    </span>
  );
};
