import create from 'zustand';
import { generateID } from '@/utils';

export const useCartStore = create((set) => ({
  cart: [],
  add: (productID, count) =>
    set((state) => {
      const findedProduct = state.cart.find(
        (item) => item.productID === productID
      );

      if (findedProduct) {
        return {
          ...state,
          cart: [
            ...state.cart.filter((item) => item.id !== findedProduct.id),
            {
              ...findedProduct,
              count: findedProduct.count + count,
            },
          ],
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: generateID(),
            productID,
            count,
          },
        ],
      };
    }),
}));
