import create from 'zustand';
import { configuration } from '@/configuration';

const productList = configuration.defaultProductList;

export const useProductStore = create((set) => ({
  products: productList,
  add: (newProduct) =>
    set((state) => ({
      ...state,
      products: [...state.products, newProduct],
    })),
  delete: (productID) =>
    set((state) => ({
      ...state,
      products: state.products.filter((product) => product.id !== productID),
    })),
  update: (productID, updatedProduct) =>
    set((state) => ({
      ...state,
      products: state.products.map((product) => {
        if (product.id === productID) {
          return {
            ...product,
            ...updatedProduct,
          };
        }

        return product;
      }),
    })),
}));
