import React from 'react'
import styles from './index.module.css'

const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.id} className={styles.label}>
                {props.label}:
                <input id={props.id} value={props.value} onChange={props.onChange} className={styles.input}/>
            </label>
        </div>
    )
}

export default Input