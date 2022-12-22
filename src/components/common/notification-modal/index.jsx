import styles from './notification-modal.module.scss';
import { Modal } from '@components/common/modal';
import { configuration } from '@/configuration';
import { useModalStore } from '@store';

const modalType = configuration.modal.types.notificationModal;

export const NotificationModal = () => {
  const { data } = useModalStore((state) => state[modalType]);

  return (
    <Modal type={modalType}>
      <div className={styles['notification-modal']}>
        <h3 className={styles['notification-modal__text']}>
          {data?.notification ?? ''}
        </h3>
      </div>
    </Modal>
  );
};
