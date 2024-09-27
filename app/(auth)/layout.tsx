import Image from 'next/image';

import { bgPrimary, bgSecondary } from '@/components/tokens';
import Link from 'next/link';

export default function AuthLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className={`${bgSecondary} h-screen flex justify-between`}>
      <section className='flex justify-center items-center w-1/2 relative'>
        <Link href='/' className='absolute top-10 left-10'>
          <Image
            src='/3-iconR.png'
            alt='Imagen del Logo de la marca'
            width={80}
            height={80}
          />
        </Link>
        <Image
          src='/1-locionR.png'
          alt='Imagen de una locion'
          width={400}
          height={400}
        />
      </section>
      <section className={`flex justify-center items-center w-1/2 ${bgPrimary}`}>
        { children }
      </section>
    </main>
  );
}