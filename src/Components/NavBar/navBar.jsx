import React from 'react';
import styles from './navBar.module.css'
import defaultLogo from '../../Assets/internet.png'
const NavBar = () => {
    return (
        <div className={styles.navBar}>
        <img className={styles.logo} src={defaultLogo} alt="" />
        <h2 className={styles.title}>CodeSites</h2>
        </div>
    );
};

export default NavBar;