export class UserProfile{
  img: string
  name: string
  surname: string
  accName: string
  password: string
  id?: string
  directionDev?: string
  technologies?: string[]
  personal?: string
  addInfo?: string
  email?: string
  phone?: number
}
export interface FbCreateResponse{
  name: string
}
