export interface DaoProduct {
  id_product: number
  title: string
  value: number
  description: string
  stock: number
  state_id: number
}

export type DtoProduct = Omit<DaoProduct, 'id_product'>