'use client'

import { useEffect, useState } from 'react';
import { Header, Card } from '@/components'
import { getAllProducts } from '@/libs/api_general';

import Image from 'next/image';
import { bgPrimary, bgSecondary, standardButton, textPrimary, textSecondary } from '@/components/tokens';
import Link from 'next/link';
import { DaoProduct } from '@/types/shoppingCar';

export default function Home() {
  const [products, setProducts] = useState<DaoProduct[]>([])
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    getAllProducts()
    .then((data: DaoProduct[]) => {
      setProducts(data)
    })
    .catch((e) => {
      alert('Error al consultar la informacion del api')
    })
  }, [])

  const updateQuantity = () => {
    setQuantity((val) => val += 1)
  }

  return (
    <>
      <Header 
        quantity={quantity}
        showSearch={true}
      />
      <main className='w-full'>
        <section className={`w-full py-20 ${bgSecondary}`}>
          <section className='w-full max-w-screen-xl mx-auto flex justify-between'>
            <div className={`w-1/2 flex justify-center items-center flex-col ${textPrimary}`}>
              <h1 className='text-5xl text-center mb-5'>Parfums</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus. Saepe dicta perspiciatis quaerat animi quae commodi vel natus non, facilis cumque. Corporis sequi velit delectus similique fugit itaque quia et consectetur! A inventore et corporis ut eum voluptatum fugiat obcaecati, laboriosam, alias eligendi reprehenderit, tenetur repudiandae accusamus quaerat omnis?
              </p>
              <div className='mt-10'>
                <Link
                  className={`${standardButton} ${bgPrimary} ${textSecondary} transition-all hover:font-bold`}
                  href='/blog'
                >Conoce mas</Link>
              </div>
            </div>
            <Image
              src='/2-relojR.png'
              alt='Imagen de un relog'
              width={350}
              height={350}
            />
          </section>
        </section>
        <section className='w-full max-w-screen-xl mx-auto flex flex-wrap mt-10 gap-5 justify-evenly'>
          {products.map((prod) => (
            <Card
              key={prod.id_product}
              product={prod}
              updateQuantity={updateQuantity}
            />
          ))}
        </section>
      </main>
    </>
  );
}
