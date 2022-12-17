import shallow from 'zustand/shallow';
import { useUserStore as useUserBaseStore } from './user';

const useUserStore = (selector) => useUserBaseStore(selector, shallow);

export { useUserStore };
