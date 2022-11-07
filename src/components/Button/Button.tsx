import * as React from 'react'
import styles from './Button.module.scss'

type PropsType = {
  type?: 'submit' | 'button'
  name: string
  isLoading?: boolean
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void
}

const UiButton = ({
  type = 'button',
  name = 'SomeButton',
  isLoading = false,
  onClick,
}: PropsType) => (
  <button
    className={styles.button}
    type={type}
    onClick={onClick}
  >
    {!isLoading ? name : 'Loading...'}
  </button>
)


export default UiButton
