import { FormErrors } from "./enums"

export type TFormPayload = {
  email: string
  password: string
}

export type TFormErrors = {
  [key in FormErrors]: boolean
}