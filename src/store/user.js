import create from 'zustand';
import { configuration } from '@/configuration';

const userTypes = configuration.user.types;

export const useUserStore = create((set) => ({
  user: userTypes.guest,
  logIn: (userType) => set({ user: userType }),
  logOut: () => set({ user: userTypes.guest }),
}));
