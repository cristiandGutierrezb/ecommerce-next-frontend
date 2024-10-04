'use client'

import Image from "next/image"
import Link from "next/link"

import { useShoppingCarStore } from "@/store/shoppingCar"

import { bgPrimary } from "../tokens"

type HeaderProps = {
  quantity: number,
  showSearch: boolean
}

export const Header = ({ quantity, showSearch = true }: HeaderProps) => {
  
  const items = useShoppingCarStore((state) => state.items)

  const onShowProducts = () => {
    console.log(items);
  }

  return (
    <header className={`w-full h-20 flex justify-center items-center shadow-md ${bgPrimary}`}>
      <nav className="w-full max-w-screen-xl flex mx-auto justify-between items-center">
        <div>
          <Link href='/'>
            <Image 
              src='/3-iconR.png'
              alt="Icon de la plataforma"
              width='60'
              height='60'
            />
          </Link>
        </div>
        <ul className="flex gap-5">
          <Link href='/about' className="hover:text-blue-500 cursor-pointer transition-all">About</Link>
          <Link href='/questions' className="hover:text-blue-500 cursor-pointer transition-all">Preguntas frecuentes</Link>
          <Link href='/login' className="hover:text-blue-500 cursor-pointer transition-all">Login</Link>
          <Link href='/register' className="hover:text-blue-500 cursor-pointer transition-all">Register</Link>
          <button onClick={onShowProducts}>
            Show Products
          </button>
        </ul>
        <div className="flex gap-4 justify-center items-center">
          {showSearch && (
            <>
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
                  { quantity }
                </span>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

