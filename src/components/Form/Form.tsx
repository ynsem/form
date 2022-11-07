import * as React from 'react'
import Input from '../Input'
import Button from '../Button';
import Plug from '../Plug';
import { validateEmail } from '../../helpers/validateEmail'
import styles from './Form.module.scss';

const getFormClass = (isOpen: boolean): string => `${styles.form} ${isOpen ? styles['form-open'] : styles['form-close']}`

const Form = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true)
  const [isNext, setIsNext] = React.useState<boolean>(false)

  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const [error, setError] = React.useState<boolean>(false)

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  const sendForm = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()

    setIsOpen(false)

    setTimeout(() => {
      setIsNext(true)
    }, 1000)

    //     if (validateEmail(email)) {
    //         fetch('https://echo.htmlacademy.ru/', {
    //             method: 'POST',
    //             body: JSON.stringify({ email, password }),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //         })
    //     }
  }

  return (
    !isNext ?
      <form className={getFormClass(isOpen)}>
        <Input
          type='email'
          name='email'
          id='email'
          label='Email'
          value={email}
          onChange={onChangeEmail}
          error={error}
        />
        <Input
          type='password'
          name='password'
          id='password'
          label='Password'
          value={password}
          onChange={onChangePassword}
          error={error} />
        <Button
          type='submit'
          name="Submit"
          onClick={sendForm}
        />
      </form>
      :
      <Plug />
  )
}

export default Form
