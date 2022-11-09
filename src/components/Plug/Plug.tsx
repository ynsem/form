import styles from './Plug.module.scss'

type TProps = {
  error?: string
}

//refresh the browser, everything will start again, made on purpose
const reload = () => {
  window.location.reload()
}

const getPlugClass = (error: string): string => `${styles.plug} ${!error ? styles['plug-success'] : styles['plug-error']}`

const getButtonClass = (error: string): string => `${styles.button} ${!error ? styles['button-success'] : styles['button-error']}`

const Plug = ({ error = '' }: TProps) => (
  <section className={getPlugClass(error)}>
    <button
      className={getButtonClass(error)}
      type='button'
      onClick={reload}
    >
      reload
    </button>

    {
      error &&
      <p className={styles.text}>
        Something wrong with server or the internet, but...
      </p>
    }

    <p className={styles.text}>
      Something good is waiting for you!
    </p>

    <p className={styles.text}>
      To be released soon...
    </p>
  </section>
)

export default Plug
