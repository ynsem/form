import * as React from 'react'

import Input from '../Input'
import Button from '../Button';
import Plug from '../Plug';

import { postRequest } from '../../api'
import { validateEmail, validatePassword } from '../../helpers/validators'

import { NEXT_STEP_TIME } from '../../constants';
import { TFormPayload, TFormErrors } from '../../types'
import { FormErrorsTypes, FormErrors } from '../../enums'

import styles from './Form.module.scss';

const getFormClass = (isOpen: boolean): string => `${styles.form} ${isOpen ? styles['form-open'] : styles['form-close']}`

const Form = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true)
  const [isNext, setIsNext] = React.useState<boolean>(false)

  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const [errors, setErrors] = React.useState<TFormErrors>({
    request: '',
    email: '',
    password: '',
  })

  const errorsController = (name: FormErrorsTypes, error = ''): void => {
    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }))
  }

  const nextStep = (): void => {
    setIsOpen(false)
    setTimeout(() => {
      setIsNext(true)
    }, NEXT_STEP_TIME)
  }

  const fromValidator = (email: string, password: string): boolean => {
    if (!validateEmail(email)) errorsController(FormErrorsTypes.Email, FormErrors.Email)

    if (!validatePassword(password)) errorsController(FormErrorsTypes.Password, FormErrors.Password)

    if (validateEmail(email) && validatePassword(password)) return true

    return false
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    errorsController(FormErrorsTypes.Email)
    setEmail(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    errorsController(FormErrorsTypes.Password)
    setPassword(e.target.value)
  }

  const sendForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (fromValidator(email, password)) {
      postRequest<TFormPayload>({ email, password })
        .then(response => {
          if (response.ok) nextStep()
        })
        .catch((error) => {
          errorsController(FormErrorsTypes.Request, String(error))
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
          error={errors.email}
        />
        <Input
          type='password'
          name='password'
          id='password'
          label='Password'
          value={password}
          onChange={onChangePassword}
          error={errors.password} />
        <Button
          type='submit'
          name="Submit"
        />
      </form>
      :
      <Plug error={errors.request} />
  )
}

export default Form
