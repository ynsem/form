import styles from './Plug.module.scss'

//refresh the browser, everything will start again, made on purpose
const reload = () => {
  window.location.reload()
}

const Plug = () => (
  <section className={styles.plug}>
    <button
      className={styles.button}
      type='button'
      onClick={reload}
    >
      reload
    </button>

    <p className={styles.text}>
      Something good is waiting for you!
    </p>

    <p className={styles.text}>
      To be released soon...
    </p>
  </section>
)

export default Plug
