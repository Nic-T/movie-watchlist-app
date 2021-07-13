import React from 'react'
import styles from '../styles/Nav.module.css'

function Nav () {
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                <h4>
                    Movies
                </h4>
            </button>
            <button className={styles.button}>
                <h4>
                    Shows
                </h4>
            </button>
            <button className={styles.button}>
                <h4>
                    Favorites
                </h4>
            </button>
        </div>
    )
}

export default Nav
