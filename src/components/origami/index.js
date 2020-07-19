import React from 'react'
import styles from './index.module.css'
import image from '../../images/blue-origami-bird.png'

const Origami = (props) => {
    return (
        <div className={styles.container}>
            <img className={styles["origami-image"]} src={image} />
            <p className={styles.description}>
                <span>{props.index} - </span>
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