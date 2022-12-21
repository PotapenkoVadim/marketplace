import styles from './notification.module.scss';

export const Notification = ({ text, className }) => {
  return (
    <span className={`${styles['notification']} ${className ?? ''}`}>
      {text}
    </span>
  );
};
