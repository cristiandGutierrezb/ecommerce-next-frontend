import { DtoUser } from "@/types/api-general"

const API = 'http://192.168.0.198:3000/api/v1'

export const getAllProducts = async () => {
  const info = await fetch(`${API}/products`)
  const rawData = await info.json()
  const { data } = rawData 

  return data
}

export const getInfoUser = async (body: DtoUser) => {
  const info = await fetch(`${API}/user`, {
    method: 'POST',
    body: JSON.stringify(body)
  })
  const rawData = await info.json()
  const { data } = rawData 

  return data
}

