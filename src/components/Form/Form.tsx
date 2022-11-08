import * as React from 'react'

import Input from '../Input'
import Button from '../Button';
import Plug from '../Plug';

import { postRequest } from '../../api'
import { validateEmail, validatePassword } from '../../helpers/validators'

import { NEXT_STEP_TIME } from './consts';
import { TFormPayload, TFormErrors } from './types'
import { FormErrors } from './enums'

import styles from './Form.module.scss';

const getFormClass = (isOpen: boolean): string => `${styles.form} ${isOpen ? styles['form-open'] : styles['form-close']}`

const Form = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true)
  const [isNext, setIsNext] = React.useState<boolean>(false)

  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const [errors, setErrors] = React.useState<TFormErrors>({
    request: false,
    email: false,
    password: false,
  })

  const errorsController = (name: FormErrors, isError = true): void => {
    setErrors((prevState) => ({
      ...prevState,
      [name]: isError,
    }))
  }

  const nextStep = (): void => {
    setIsOpen(false)
    setTimeout(() => {
      setIsNext(true)
    }, NEXT_STEP_TIME)
  }

  const fromValidator = (email: string, password: string): boolean => {
    if (!validateEmail(email)) errorsController(FormErrors.Email)

    if (!validatePassword(password)) errorsController(FormErrors.Password)

    if (validateEmail(email) && validatePassword(password)) return true

    return false
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    errorsController(FormErrors.Email, false)
    setEmail(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    errorsController(FormErrors.Password, false)
    setPassword(e.target.value)
  }

  const sendForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (fromValidator(email, password)) {
      postRequest<TFormPayload>({ email, password })
        .then(response => {
          if (response.ok) nextStep()
        })
        .catch(() => {
          errorsController(FormErrors.Request)
          nextStep()
        })
    }
  }

  return (
    !isNext ?
      <form className={getFormClass(isOpen)} onSubmit={sendForm}>
        <Input
          type='text'
          name='email'
          id='email'
          label='Email'
          value={email}
          onChange={onChangeEmail}
          isError={errors.email}
        />
        <Input
          type='password'
          name='password'
          id='password'
          label='Password'
          value={password}
          onChange={onChangePassword}
          isError={errors.password} />
        <Button
          type='submit'
          name="Submit"
        />
      </form>
      :
      <Plug isError={errors.request} />
  )
}

export default Form
