'use client'

import { useParams } from "next/navigation"

export default function HomeAccount() {

  const { idUser } = useParams()

  return (
    <div>{ idUser }</div>
  )
}
