import styles from './dialog-modal.module.scss';
import { Modal } from '@components/common/modal';
import { configuration } from '@/configuration';
import { Button } from '@uikit/button';
import { useModalStore } from '@/store';

const modalType = configuration.modal.types.dialogModal;

export const DialogModal = () => {
  const [modal, close] = useModalStore((state) => [
    state[modalType],
    state.close,
  ]);

  const closeDialogModal = () => {
    close(modalType);
  };

  return (
    <Modal type={modalType} title={modal.data?.title}>
      {modal.data && (
        <div className={styles['dialog-modal']}>
          <Button onClick={modal.data.action}>
            {modal.data?.buttonText ?? 'Accept'}
          </Button>

          <Button variant="secondary" onClick={closeDialogModal}>
            Cancel
          </Button>
        </div>
      )}
    </Modal>
  );
};
