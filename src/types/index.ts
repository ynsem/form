import { FormErrorsTypes } from "../enums"

export type TFormPayload = {
  email: string
  password: string
}

export type TFormErrors = {
  [key in FormErrorsTypes]: string
}