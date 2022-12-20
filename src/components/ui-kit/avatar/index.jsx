import styles from './avatar.module.scss';

export const Avatar = ({ link, className }) => {
  return (
    <img
      className={`${styles['avatar']} ${className ?? ''}`}
      loading="lazy"
      src={link}
      alt="user avatar"
    />
  );
};
