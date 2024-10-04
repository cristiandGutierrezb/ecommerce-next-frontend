export type Product = {
  id_product: number
  title: string
  value: number
  description: string
  stock: number
  state_id: number
}

export interface DaoUser {
  id: number
  user: string
  password: string
}

export type DtoUser = Omit<DaoUser, 'id'>
