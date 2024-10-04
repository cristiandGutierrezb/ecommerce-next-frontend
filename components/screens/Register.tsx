'use client'

import { 
  bgPrimary, 
  bgSecondary, 
  standardButton, 
  standardForm, 
  standardInput 
} from "@/components/tokens"
import Link from "next/link"

export default function Register() {
  return (
    <form className={`${standardForm} ${bgSecondary} w-1/2`}>
      <div className="flex flex-col mb-7">
        <input 
          className={`${standardInput}`}
          id="name"
          type="text"
          placeholder="Fullname"
        />
      </div>
      <div className="flex flex-col mb-7">
        <input 
          className={`${standardInput}`}
          id="email" 
          type="email" 
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col mb-7">
        <input 
          className={`${standardInput}`}
          id="user" 
          type="text" 
          placeholder="User"
        />
      </div>
      <div className="flex flex-col mb-7">
        <input
          className={`${standardInput}`} 
          id="password" 
          type="password"
          placeholder="Password" 
        />  
      </div>
      <div className="flex flex-col mb-7">
        <input 
          className={`${standardInput}`}
          id="confirm-password" 
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <button className={`${standardButton} ${bgPrimary} transition-all hover:font-bold`} type="submit">
          Register
        </button>
      </div>
      <div className="text-center text-sm mt-5 text-white">
        ¿Ya tienes cuenta? <Link className="font-bold" href='/login'>Inicia sesión aquì</Link>
      </div>
    </form>
  )
}
