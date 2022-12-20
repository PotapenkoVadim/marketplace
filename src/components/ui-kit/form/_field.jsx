import styles from './form.module.scss';
import { useState, useEffect } from 'react';

export const FormField = ({ value, label, name, onChange, type = 'text' }) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => setIsActive(Boolean(value)), [value]);

  return (
    <div className={styles['form__control']}>
      <input
        className={styles['form__field']}
        type={type}
        name={name}
        onChange={onChange}
      />

      <label
        className={`${styles['form__label']} ${
          isActive && styles['form__label_active']
        }`}
      >
        {label}
      </label>
    </div>
  );
};
