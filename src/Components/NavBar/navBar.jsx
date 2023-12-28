import React from 'react';
import styles from './navBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navBar}>
        <h2 className={styles.title}>CodeSites</h2>
        </div>
    );
};

export default NavBar;