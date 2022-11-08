import * as React from 'react'
import styles from './Layout.module.scss';

type TProps = {
  children: React.ReactNode,
}

const Layout = ({ children }: TProps) => {
  return (
    <section className={styles.layout}>
      {children}
    </section>
  )
}

export default Layout
