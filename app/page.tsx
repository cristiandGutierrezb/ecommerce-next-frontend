'use client'

import { useEffect, useState } from 'react';
import { Header, Card } from '@/components'
import { getAllProducts } from '@/libs/api_general';

import { Product } from '@/types/api-general';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    getAllProducts()
    .then((data: Product[]) => {
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
      />
      <main className='w-full max-w-screen-xl mx-auto flex flex-wrap mt-10 gap-5 justify-evenly'>
        {products.map((prod, index) => (
          <Card 
            key={prod.id_product}
            product={prod}
            updateQuantity={updateQuantity}
          />
        ))}
      </main>
    </>
  );
}
