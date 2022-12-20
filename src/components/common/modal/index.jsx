import styles from './modal.module.scss';
import { useState, useEffect } from 'react';
import { IconRounded } from '@uikit/icon/_rounded';

export const Modal = ({ children, shouldOpen, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(shouldOpen), [shouldOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${styles['modal__wrapper']} ${isOpen && styles['modal__wrapper_open']}`}>
      <div className={styles['modal__container']}>
        <div className={styles['modal__header']}>
          <h3 className={styles['modal__title']}>{title}</h3>

          <IconRounded
            onClick={closeModal}
            variant="close"
            color="white"
            size="mini"
            background="accent"
            className={styles['modal__close']} />
        </div>

        <div className={styles['modal__content']}>
          {children}
        </div>
      </div>
    </div>
  );
};