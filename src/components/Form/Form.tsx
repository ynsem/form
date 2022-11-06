import * as React from 'react'
import { validateEmail } from '../../helpers/validateEmail'
import styles from './Form.module.scss';

const Form = () => {
    return (
        <form className={styles.form} action="POST">
            <input type="text" />
            <input type="text" />
        </form>
    )
}

export default Form
