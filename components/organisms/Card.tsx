import Image from "next/image"
import Link from "next/link"

import { colorBgRed } from "../tokens"

type CardProps = {
  idCard: string
}

export function Card({idCard}: CardProps) {
  return (
    <article className={`flex flex-col h-max rounded-sm border-slate-400 p-4 ${colorBgRed}`}>
      <Link href={`/${idCard}`}>
        <Image
          className="rounded-md"
          src='/dolphin.webp'
          alt=''
          width='250'
          height='200'
        />
      </Link>
      <p className="font-semibold text-xl text-gray-950">This is the title</p>
      <p className="font-semibold text-sm text-gray-950">This is the cost</p>
      <button className="p-2 bg-slate-600 rounded">
        Add to cart
      </button>
    </article>
  )
}
