import shallow from 'zustand/shallow';
import { useUserStore as useUserBaseStore } from './user';
import { useModalStore as useModalBaseStore } from './modal';
import { useProductStore as useProductBaseStore } from './product';
import { useCartStore as useCartBaseStore } from './cart';

const useUserStore = (selector) => useUserBaseStore(selector, shallow);
const useModalStore = (selector) => useModalBaseStore(selector, shallow);
const useProductStore = (selector) => useProductBaseStore(selector, shallow);
const useCartStore = (selector) => useCartBaseStore(selector, shallow);

export { useUserStore, useModalStore, useProductStore, useCartStore };
