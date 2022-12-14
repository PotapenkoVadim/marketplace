import styles from './poster.module.scss';

export const Poster = ({ source, className, alt = 'poster' }) => {
  return (
    <div className={`${styles['poster']} ${className ?? ''}`}>
      <img
        className={styles['poster__image']}
        src={source}
        loading='lazy'
        alt={alt} />
    </div>
  );
};