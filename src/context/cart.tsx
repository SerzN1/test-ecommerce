import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { STORAGE_KEY } from '../constant';
import { IProduct } from '../pages/products/types';

interface ICartContext {
  items: Record<string, number>;
  addProduct(product: IProduct): void;
  removeProduct(product: IProduct): void;
  countItems(): number;
}

const getInitialItems = (): Record<string, number> => {
  let initialItems: Record<string, number> = {};
  try {
    const storedData = sessionStorage.getItem(STORAGE_KEY);
    if (storedData) {
      initialItems = JSON.parse(storedData);
    }
  } catch (e) {
    console.warn('Unable to parse stored data');
  }
  return initialItems;
};

const noop = (product: IProduct) => {};

const CartContext = React.createContext<ICartContext>({
  items: {},
  addProduct: noop,
  removeProduct: noop,
  countItems: () => 0,
});

export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Record<string, number>>(getInitialItems());

  const addProduct = (product: IProduct) => {
    setItems({
      ...items,
      [product.id]: (product.id in items ? items[product.id] : 0) + 1,
    });
  };

  const removeProduct = (product: IProduct) => {
    const count = items[product.id];
    if (count - 1 === 0) {
      const newItems = { ...items };
      delete newItems[product.id];
      setItems(newItems);
    } else if (count) {
      setItems({
        ...items,
        [product.id]: count - 1,
      });
    }
  };

  const countItems = () => Object.values(items).reduce((acc, i) => acc + i, 0);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        addProduct,
        removeProduct,
        countItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
