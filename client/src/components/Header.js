import React from 'react'
import Nav from './Nav'
import styles from '../styles/Header.module.css'

function Header() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Movie Watchlist App</h1>
            <Nav/>
        </div>
    )
}

export default Header
