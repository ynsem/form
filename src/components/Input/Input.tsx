import * as React from 'react'
import styles from './Input.module.scss';

type TProps = {
  type: 'text' | 'password'
  name: string
  id: string
  value: string
  label: string
  error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const getClass = (className: string, error?: string): string => !error
  ? styles[className]
  : `${styles[className]} ${styles[`${[className]}-error`]}`

const Input = ({ type, name, id, value, label, error, onChange, }: TProps) => (
  <div className={styles['label-container']}>
    <input
      className={getClass('input', error)}
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    />

    <label
      className={getClass('label', error)}
      htmlFor={id}
    >
      {label}
    </label>

    {
      error &&
      <p className={styles['error-message']}>
        {error}
      </p>
    }
  </div>
)

export default Input
