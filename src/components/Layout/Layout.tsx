import * as React from 'react'
import styles from './Layout.module.scss';

type PropsType = {
  children: React.ReactNode,
}

const Layout = ({ children }: PropsType) => {
  return (
    <section className={styles.layout}>
      {children}
    </section>
  )
}

export default Layout
