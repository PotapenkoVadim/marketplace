import create from 'zustand';
import { configuration } from '@/configuration';

const productModalType = configuration.modal.types.productModal;
const dialogModalType = configuration.modal.types.dialogModal;
const notificationModalType = configuration.modal.types.notificationModal;

export const useModalStore = create((set) => ({
  [productModalType]: {
    isOpen: false,
    data: null,
  },
  [dialogModalType]: {
    isOpen: false,
    data: null,
  },
  [notificationModalType]: {
    isOpen: false,
    data: null,
  },
  open: (modalType, data) =>
    set((state) => ({
      ...state,
      [modalType]: {
        ...state[modalType],
        isOpen: true,
        data,
      },
    })),
  close: (modalType) =>
    set((state) => ({
      ...state,
      [modalType]: {
        ...state[modalType],
        isOpen: false,
      },
    })),
  toggle: (modalType) =>
    set((state) => ({
      ...state,
      [modalType]: {
        ...state[modalType],
        isOpen: !state.modals[modalType].isOpen,
      },
    })),
}));
