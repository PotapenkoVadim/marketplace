import create from 'zustand';

export const useModalStore = create((set) => ({
  productModal: false,
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
