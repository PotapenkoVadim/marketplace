import styles from './form.module.scss';
import { useState, useEffect } from 'react';
import { useTargetFocus } from '@hooks';

export const FormField = ({ value, label, name, onChange, type = 'text' }) => {
  const [isActive, setIsActive] = useState(true);

  const [fieldRef, focusToField] = useTargetFocus();

  useEffect(() => setIsActive(Boolean(value)), [value]);

  return (
    <div className={styles['form__control']}>
      <input
        ref={fieldRef}
        className={styles['form__field']}
        value={value}
        type={type}
        name={name}
        onChange={onChange}
      />

      <label
        onClick={focusToField}
        className={`${styles['form__label']} ${
          isActive && styles['form__label_active']
        }`}
      >
        {label}
      </label>
    </div>
  );
};
