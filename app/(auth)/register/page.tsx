import type { Metadata } from "next"
import './style.css'

export const metadata: Metadata = {
  title: 'Register',
  description: 'This component is for register on my app'
}

export default function RegisterPage() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" />
      </div>
      <div>
        <label htmlFor="user">User</label>
        <input id="user" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input id="confirm-password" type="password" />
      </div>
      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  )
}
