import { DaoProduct } from '@/types/shoppingCar';
import { create } from 'zustand';

type ShoppingCarType = {
  items: DaoProduct[],
  addItem: (e: DaoProduct) => void,
  removeItem: (i: number) => void
}

export const useShoppingCarStore = create<ShoppingCarType>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (index) => set((state) => ({ items: state.items.filter((_: DaoProduct, i: number) => i != index) }))
}))
