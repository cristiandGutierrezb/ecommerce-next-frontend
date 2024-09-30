import { z } from 'zod'

export const loginSchema = z.object({
  user: z.string()
        .min(5, { message: "El campo debe tener minimo 5 caracteres." })
        .max(50, { message: "El campo no puede superar los 50 caracteres." }),
  password: z.string()
              .max(30, { message: "El campo no puede superar los 30 caracteres" })
})
