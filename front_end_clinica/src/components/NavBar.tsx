import Link from "next/link";

import styles from '../styles/navBar.module.css';

export default function NavBar() {
    return (
        <>
            <nav className={ styles.containerNavBar }>
                <div className={styles.divLogo}>
                    <Link href={'/'}>CLEAN <span>ODONTO</span></Link>
                </div>
                
                <input type="checkbox" name="checkbox" id="checkbox" className={ styles.checkbox } />
                <label htmlFor="checkbox" className={ styles.label_menu }>
                    <span className={ styles.hamburger }></span>
                </label>

                <ul className={ styles.menu }>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/aboltClinica'}>Sobre a Clínica</Link>
                    </li>
                    <li className={ styles.buttonMarcaConsulta }>
                        <Link href={'/marcarConsulta'} style={{ backgroundColor: '#1579bc', color: '#fff' }}>Marcar Consulta</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}