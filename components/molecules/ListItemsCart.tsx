import { DaoProduct } from "@/types/shoppingCar"

type ListItemsCartProps = {
  items: DaoProduct[]
}

export default function ListItemsCart({ items }: ListItemsCartProps) {
  return (
    <ul>
      <li className="flex justify-between">
        <span className="flex-1 text-black font-bold">Title</span>
        <span className="flex-1 text-black font-bold">Value</span>
        <span className="flex-1 text-black font-bold">Quantity</span>
      </li>
      {items.map((product) => (
        <li key={product.id_product} className="flex justify-between">
          <span className="flex-1 text-black">{product.title}</span>
          <span className="flex-1 text-black">{product.value}</span>
          <span className="flex-1 text-black">{product.quantity}</span>
        </li>
      ))}
    </ul>
  )
}
