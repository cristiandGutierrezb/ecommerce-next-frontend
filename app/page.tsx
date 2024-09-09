import { Header, Card } from '@/components'

export default function Home() {
  return (
    <>
      <Header />
      <main className='w-full max-w-screen-xl mx-auto flex flex-wrap mt-10 gap-5 justify-evenly'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <section>
          This is my card
        </section> */}
      </main>
    </>
  );
}
