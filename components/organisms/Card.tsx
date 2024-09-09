import Image from "next/image"
import Link from "next/link"

export function Card() {
  return (
    <article className="flex flex-col h-max rounded-sm border-slate-400 p-4">
      <Link href='/details/asdf'>
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
