import styles from './button-field.module.scss';

export const ButtonField = ({ textButton, className, placeholder }) => {
  return (
    <div className={`${styles['button-field']} ${className ?? ''}`}>
      <input className={styles['button-field__field']} type="text" />
      <button className={styles['button-field__button']}>{textButton}</button>
      <span className={styles['button-field__placeholder']}>{placeholder}</span>
    </div>
  );
};
