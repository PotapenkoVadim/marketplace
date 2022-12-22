import styles from './button-field.module.scss';
import { useTargetFocus } from '@hooks';

export const ButtonField = ({ textButton, className, placeholder }) => {
  const [fieldRef, focusToField] = useTargetFocus();

  return (
    <div className={`${styles['button-field']} ${className ?? ''}`}>
      <input
        ref={fieldRef}
        className={styles['button-field__field']}
        type="text"
      />
      <button className={styles['button-field__button']}>{textButton}</button>
      <span
        onClick={focusToField}
        className={styles['button-field__placeholder']}
      >
        {placeholder}
      </span>
    </div>
  );
};
