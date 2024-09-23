import Image from "next/image"
import Link from "next/link"

import { Product } from "@/types/api-general"
import { colorBgRed } from "../tokens"

type CardProps = {
  product: Product
  updateQuantity: () => void
}

export function Card({ product, updateQuantity }: CardProps) {
  return (
    <article className={`flex flex-col h-max rounded-sm border-slate-400 p-4 ${colorBgRed} w-[350px]`}>
      <Link href={`/${product.id_product}`}>
        <Image
          className="rounded-md"
          src='/dolphin.webp'
          alt=''
          width='250'
          height='200'
        />
      </Link>
      <p className="font-semibold text-xl text-gray-950">{product.title}</p>
      <p className="font-semibold text-sm text-gray-950">{product.description}</p>
      <button onClick={updateQuantity} className="p-2 bg-slate-600 rounded">
        Add to cart
      </button>
    </article>
  )
}
