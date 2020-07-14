import React from 'react'
import styles from './index.module.css'

const Link = (props) => {
    return (
        <div className={styles[`${props.type}-list-item`]}>
            <a href={props.href} className={styles[`${props.type}-link`]}>{props.title}</a>
        </div>
    )
}

export default Link