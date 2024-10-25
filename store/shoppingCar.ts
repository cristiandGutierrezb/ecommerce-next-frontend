import { DaoProduct } from '@/types/shoppingCar';
import { create } from 'zustand';

type ShoppingCarType = {
  items: DaoProduct[],
  addItem: (e: DaoProduct) => void,
  removeItem: (i: number) => void
}

const uniqueProducts = (oldArrayProducts: DaoProduct[], newItem: DaoProduct): DaoProduct[] => {
  let newArray = []
  const existProduct = oldArrayProducts.findIndex((product) => product.id_product === newItem.id_product)

  if (existProduct < 0) {
    newItem.quantity = 1
    newArray = [...oldArrayProducts, newItem]
  } else {
    const updatedCart = [...oldArrayProducts]
    updatedCart[existProduct].quantity++
    newArray = updatedCart
  }

  return newArray
}

// [...state.items, item]

export const useShoppingCarStore = create<ShoppingCarType>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: uniqueProducts(state.items, item) })),
  removeItem: (index) => set((state) => ({ items: state.items.filter((_: DaoProduct, i: number) => i != index) }))
}))
