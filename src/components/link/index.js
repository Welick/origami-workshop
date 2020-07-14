import React from 'react'
import styles from './index.module.css'

const Link = (props) => {
    return (
        <li className={styles["list-item"]}>
            <a href={props.href} className={styles["list-item"]}>{props.title}</a>
        </li>
    )
}

export default Link