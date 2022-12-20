import create from 'zustand';
import { configuration } from '@/configuration';

const productModalType = configuration.modal.types.productModal;

export const useModalStore = create((set) => ({
  [productModalType]: {
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
