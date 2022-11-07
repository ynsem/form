import * as React from 'react'
import styles from './Input.module.scss';

type PropsType = {
  type: 'email' | 'password'
  name: string
  id: string
  value: string
  label: string
  error?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ type, name, id, value, label, onChange, }: PropsType) => (
  <div className={styles['label-container']}>
    <input
      className={styles.input}
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
