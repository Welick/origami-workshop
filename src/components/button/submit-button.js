import React from 'react'
import styles from './submit-button.module.css'

const SubmitButton = (props) => {
    return (
        <button className={styles.button}>{props.title}</button>
    )
}

export default SubmitButton