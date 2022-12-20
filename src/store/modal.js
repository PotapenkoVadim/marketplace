import create from 'zustand';
import { configuration } from '@/configuration';

const productModalType = configuration.modal.types.productModal;

export const useModalStore = create((set) => ({
  [productModalType]: false,
  open: (modalType) =>
    set((state) => ({
      ...state,
      [modalType]: true,
    })),
  close: (modalType) =>
    set((state) => ({
      ...state,
      [modalType]: false,
    })),
  toggle: (modalType) =>
    set((state) => ({
      ...state,
      [modalType]: !state.modals[modalType],
    })),
}));
