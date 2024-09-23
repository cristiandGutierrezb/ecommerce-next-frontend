const API = 'http://192.168.0.198:3000/api/v1'

export const getAllProducts = async () => {
  const info = await fetch(`${API}/products`)
  const rawData = await info.json()
  const { data } = rawData 

  return data
}
