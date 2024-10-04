import Image from "next/image"
import Link from "next/link"

import { useShoppingCarStore } from "@/store/shoppingCar"

import { Product } from "@/types/api-general"
import { DaoProduct } from "@/types/shoppingCar"

type CardProps = {
  product: Product
  updateQuantity: () => void
}

export function Card({ product, updateQuantity }: CardProps) {
  
  const addProduct = useShoppingCarStore((state) => state.addItem)

  const onAddProduct = (product: DaoProduct) => {
    addProduct(product)
  }

  return (
    <article className={`flex flex-col rounded-sm w-[250px] pb-4`}>
      <Link href={`/${product.id_product}`}>
        <Image
          src='/dolphin.webp'
          alt=''
          width='250'
          height='200'
        />
      </Link>
      <p className="font-semibold text-xl text-gray-950 text-center my-4 px-2">{product.title}</p>
      <p className="font-semibold text-sm text-gray-950">{product.description}</p>
      <button onClick={() => onAddProduct(product)} className="p-2 bg-slate-600 rounded w-max mx-auto">
        Add to cart
      </button>
    </article>
  )
}
