'use client'
import type { Metadata } from "next"
import Link from "next/link"
import { useForm, SubmitHandler } from "react-hook-form"

import { 
  standardForm, 
  bgSecondary, 
  standardInput, 
  standardButton, 
  bgPrimary
} from "@/components/tokens"

type Inputs = {
  example: string
  exampleRequired: string
}

export default function LoginPage() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    const body = {
      user: data.example,
      pass: data.exampleRequired
    }
    // Service
  }
  
  return (
    <form className={`${standardForm} ${bgSecondary} w-1/2`} onSubmit={handleSubmit(onSubmit)}>  
      <div className="flex flex-col">
        <input 
          {...register("example")}
          className={`${standardInput}`} 
          id="user" 
          type="text" 
          placeholder="User"
        />
      </div>
      <div className="flex flex-col my-7">
        <input 
          {...register("exampleRequired", { required: true })}
          className={`${standardInput}`} 
          id="password" 
          type="password"
          placeholder="Password" 
        />
      </div>
      <div className="w-full flex justify-center items-center">
        {/* <button className={`${standardButton} ${bgPrimary} transition-all hover:font-bold`} type="submit">
          Login
        </button> */}
        <input className={`${standardButton} ${bgPrimary} transition-all hover:font-bold`} type="submit" />
      </div>
      <div className="text-center text-sm mt-5 text-white">
        ¿Aún no tienes cuenta? <Link className="font-bold" href='/register'>Registrate aquì</Link>
      </div>
    </form>
  )
}
