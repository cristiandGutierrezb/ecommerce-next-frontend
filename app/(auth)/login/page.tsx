import type { Metadata } from "next"
import Link from "next/link"

import { 
  standardForm, 
  bgSecondary, 
  standardInput, 
  standardButton, 
  bgPrimary
} from "@/components/tokens"

export const metadata: Metadata = {
  title: 'Login',
  description: 'This component is for login on my app'
}

export default function LoginPage() {
  return (
    <form className={`${standardForm} ${bgSecondary} w-1/2`}>
      <div className="flex flex-col">
        <input 
          className={`${standardInput}`} 
          id="user" 
          type="text" 
          placeholder="User"
        />
      </div>
      <div className="flex flex-col my-7">
        <input 
          className={`${standardInput}`} 
          id="password" 
          type="password"
          placeholder="Password" 
        />
      </div>
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
