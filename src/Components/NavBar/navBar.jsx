import React from 'react';
import styles from './navBar.module.css';
import defaultLogo from '../../Assets/internet.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <Link to="/"><img className={styles.logo} src={defaultLogo} alt=""/></Link>
            <h2 className={styles.title}>CodeSites</h2>

            <ul className={styles.menu}>
                <li><Link className={styles.menu2} to="/">Inicio</Link></li>
                <li><Link className={styles.menu2} to="/servicios">Servicios</Link></li>
                <li><Link className={styles.menu2} to="/nosotros">Sobre Nosotros</Link></li>
                <li><Link className={styles.menu2} to="/contacto">Contacto</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;