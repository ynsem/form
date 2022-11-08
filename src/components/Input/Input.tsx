import * as React from 'react'
import styles from './Input.module.scss';

type TProps = {
  type: 'text' | 'password'
  name: string
  id: string
  value: string
  label: string
  isError?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const getInputClass = (isError?: boolean): string => !isError ? styles.input : `${styles.input} ${styles['input-error']}`

const Input = ({ type, name, id, value, label, isError, onChange, }: TProps) => (
  <div className={styles['label-container']}>
    <input
      className={getInputClass(isError)}
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    />

    <label
      className={styles.label}
      htmlFor={id}
    >
      {label}
    </label>
  </div>
)

export default Input
