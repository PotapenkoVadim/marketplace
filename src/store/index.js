import shallow from 'zustand/shallow';
import { useUserStore as useUserBaseStore } from './user';
import { useModalStore as useModalBaseStore } from './modal';

const useUserStore = (selector) => useUserBaseStore(selector, shallow);
const useModalStore = (selector) => useModalBaseStore(selector, shallow);

export { useUserStore, useModalStore };
