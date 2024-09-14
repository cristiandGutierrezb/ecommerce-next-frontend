import type { Metadata } from "next"
import './style.css'

import { colorBgRed } from "@/components/tokens"

export const metadata: Metadata = {
  title: 'Login',
  description: 'This component is for login on my app'
}

export default function LoginPage() {
  return (
    <form className={`${colorBgRed}`}>
      <div>
        <label htmlFor="user">User</label>
        <input id="user" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  )
}
