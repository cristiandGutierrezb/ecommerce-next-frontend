'use client'

import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  
  return (
    <header className="w-full h-20 flex justify-center items-center shadow-md">
      <nav className="w-full max-w-screen-xl flex mx-auto justify-between items-center">
        <div>
          <Image 
            src="/coffee.svg" 
            width='30' 
            height='30' 
            alt='Icono empresarial del cafe'
          />
        </div>
        <ul className="flex gap-5">
          <Link href='/about' className="hover:text-blue-500 cursor-pointer transition-all">About</Link>
          <Link href='/questions' className="hover:text-blue-500 cursor-pointer transition-all">Preguntas frecuentes</Link>
        </ul>
        <div className="flex gap-4 justify-center items-center">
          <input
            className="rounded p-3 shadow outline-none blur:shadow-md"
            placeholder='Search product...' 
            type="text" 
          />
          <div className="relative p-3 rounded shadow">
            <Image
              src='/shopping-cart.svg'
              width='20' 
              height='20' 
              alt='Icono de carrito de compras'
            />
            <span className="absolute top-0 right-0 rounded-full bg-black text-white p-1 h-4 w-4 text-[12px] flex justify-center items-center font-bold">
              0
            </span>
          </div>
        </div>
      </nav>
    </header>
  )
}

