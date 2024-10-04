import type { Metadata } from "next"

import Register from "@/components/screens/Register"

export const metadata: Metadata = {
  title: 'Register',
  description: 'This component is for register on my app'
}

export default function RegisterPage() {
  return <Register />
}
