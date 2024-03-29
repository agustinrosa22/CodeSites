import React from 'react';
import styles from './presentation.module.css'
import defaultLogo from '../../Assets/internet.png'

const Presentation = () => {
    return (
        <div className={styles.presentation}>
            <img className={styles.image} src={defaultLogo} alt="" />
          

                <h2 className={styles.title}>Bienvenido a CodeSites</h2>
           
         
                <h3 className={styles.secondTitle}>Transformamos Ideas en Experiencias Digitales Inolvidables</h3>
         
            <p className={styles.text}>En CodeSites fusionamos creatividad y tecnología para llevar tu visión al mundo digital de manera impactante. Descubre cómo podemos impulsar tu presencia en línea y potenciar tu negocio.

            Hola, somos
                <a href="https://www.linkedin.com/in/nestor-agustin-rosa" target="_blank">Agustin Rosa</a>, <a href="https://www.linkedin.com/in/franco-bodas-003298212/" target="_blank">Franco Bodas</a>
                y <a href="https://www.linkedin.com/in/julio-ezequiel-gutierrez/" target="_blank">Julio Gutierrez</a>.
                el equipo de <strong>CodeSites</strong>. Nos apasiona el mundo de la programación y estamos comprometidos en brindar soluciones creativas y eficientes.
                Conformado por programadores dedicados, nuestro equipo está listo para enfrentar cualquier desafío técnico.</p>
        </div>
    );
};

export default Presentation;