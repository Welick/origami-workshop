import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const LinkComponent = (props) => {
    return (
        <div className={styles[`${props.type}-list-item`]}>
            <Link to={props.href} className={styles[`${props.type}-link`]}>{props.title}</Link>
        </div>
    )
}

export default LinkComponent