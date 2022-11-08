import styles from './Plug.module.scss'

type TProps = {
  isError?: boolean
}

//refresh the browser, everything will start again, made on purpose
const reload = () => {
  window.location.reload()
}

const getPlugClass = (isError: boolean): string => `${styles.plug} ${!isError ? styles['plug-success'] : styles['plug-error']}`

const getButtonClass = (isError: boolean): string => `${styles.button} ${!isError ? styles['button-success'] : styles['button-error']}`

const Plug = ({ isError = false }: TProps) => (
  <section className={getPlugClass(isError)}>
    <button
      className={getButtonClass(isError)}
      type='button'
      onClick={reload}
    >
      reload
    </button>

    {
      isError &&
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
