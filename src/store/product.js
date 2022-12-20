import create from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  add: (newProduct) =>
    set((state) => ({
      ...state,
      products: [...state.products, newProduct],
    })),
  remove: (productID) =>
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
