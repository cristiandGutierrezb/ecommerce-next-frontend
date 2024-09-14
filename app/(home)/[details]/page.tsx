'use client'

import { useParams } from "next/navigation"

export default function DetailProduct() {

  const { details } = useParams()

  return (
    <div className="text-2xl text-black">
      This is my detail
      { details }
    </div>
  )
}
