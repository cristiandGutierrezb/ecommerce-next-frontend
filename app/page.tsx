import { Header, Card } from '@/components'

export default function Home() {
  return (
    <>
      <Header />
      <main className='w-full max-w-screen-xl mx-auto flex flex-wrap mt-10 gap-5 justify-evenly'>
        <Card idCard='cardNumber1'/>
        <Card idCard='cardNumber2'/>
        <Card idCard='cardNumber3'/>
        <Card idCard='cardNumber4'/>
        <Card idCard='cardNumber5'/>
      </main>
    </>
  );
}
