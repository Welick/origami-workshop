import React from 'react'
import styles from './index.module.css'

const Origami = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.description}>
                {props.description}
            </p>
            <div>
                <span className={styles.user}>
                    <small>Author: {props.author.username}</small>
                </span>
            </div>
        </div>
    )
}

export default Origami