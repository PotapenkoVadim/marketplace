import styles from './modal.module.scss';
import { IconRounded } from '@uikit/icon/_rounded';
import { useModalStore } from '@/store';

export const Modal = ({ type, children, title }) => {
  const [modal, close] = useModalStore((state) => [state[type], state.close]);

  const closeModal = () => {
    close(type);
  };

  return (
    <div
      className={`${styles['modal__wrapper']} ${
        modal.isOpen && styles['modal__wrapper_open']
      }`}
    >
      <div className={styles['modal__container']}>
        <div className={styles['modal__header']}>
          <h3 className={styles['modal__title']}>{title}</h3>

          <IconRounded
            onClick={closeModal}
            variant="close"
            color="white"
            size="mini"
            background="accent"
            className={styles['modal__close']}
          />
        </div>

        <div className={styles['modal__content']}>{children}</div>
      </div>
    </div>
  );
};
