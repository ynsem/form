import * as React from 'react'
import styles from './Button.module.scss'

type TProps = {
  type?: 'submit' | 'button'
  name: string
  isLoading?: boolean
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void
}

const UiButton = ({
  type = 'button',
  name = 'SomeButton',
  isLoading = false,
  onClick,
}: TProps) => (
  <button
    className={styles.button}
    type={type}
    onClick={onClick}
  >
    {!isLoading ? name : 'Loading...'}
  </button>
)


export default UiButton
