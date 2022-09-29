export class User{
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
export class UserProfile{
  name: string
  surname: string
  accName: string
  password: string
  id?: string
  directionDev?: string
  technologies?: string
  personal?: string
  addIngo?: string
  email?: string
  phone?: number
}
export interface FbCreateResponse{
  name: string
}
