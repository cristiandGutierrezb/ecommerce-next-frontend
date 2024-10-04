'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { getInfoUser } from "@/libs/api_general"

import { 
  standardForm, 
  bgSecondary, 
  standardInput, 
  standardButton, 
  bgPrimary
} from "@/components/tokens"
import { loginSchema } from "@/validators/loginSchema"

type Inputs = {
  user: string
  password: string
}

export default function Login() {

  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    const body = {
      user: data.user,
      password: data.password
    }
    getInfoUser(body)
    .then((objUser) => {
      router.replace(`/profile/${objUser.user}`)
    })
  }
  
  return (
    <form className={`${standardForm} ${bgSecondary} w-1/2`} onSubmit={handleSubmit(onSubmit)}>  
      <div className="flex flex-col">
        <input 
          {...register("user")}
          className={`${standardInput}`} 
          id="user" 
          type="text" 
          placeholder="User"
        />
      </div>
      { errors.user && <span className="text-red-600">Error en variable</span> }
      <div className="flex flex-col my-7">
        <input
          {...register("password", { required: true })}
          className={`${standardInput}`} 
          id="password" 
          type="password"
          placeholder="Password" 
        />
      </div>
      { errors.password && <span className="text-red-600">Error en variable</span> }
      <div className="w-full flex justify-center items-center">
        <button className={`${standardButton} ${bgPrimary} transition-all hover:font-bold`} type="submit">
          Login
        </button>
      </div>
      <div className="text-center text-sm mt-5 text-white">
        ¿Aún no tienes cuenta? <Link className="font-bold" href='/register'>Registrate aquì</Link>
      </div>
    </form>
  )
}
